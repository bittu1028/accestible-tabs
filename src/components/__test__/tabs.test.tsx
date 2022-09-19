/* eslint-disable testing-library/no-node-access */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Tabs from "../Tabs";

import { tabsConfig } from "../../utils/mockData";

describe("Tabs Component", () => {
  test("renders learn react link", () => {
    const { asFragment } = render(<Tabs tabs={tabsConfig} />);
    expect(asFragment).toMatchSnapshot();
  });

  test("expect tab1 to be active and selected", () => {
    render(<Tabs tabs={tabsConfig} />);
    const node = screen.getByRole("tab", { selected: true });
    expect(node).toHaveTextContent("Tab1");
  });

  test("expect tab2 to be disabled", () => {
    render(<Tabs tabs={tabsConfig} />);
    expect(screen.getByText(/Tab2/i).closest("button")).toBeDisabled();
  });

  test("expect arrowRight key to trigger next tab in the list and not select disabled tab Tab2", () => {
    render(<Tabs tabs={tabsConfig} />);
    const button = screen.getByRole("tab", { selected: true });
    expect(button).toHaveTextContent("Tab1");
    fireEvent.keyDown(button, { key: "ArrowRight", code: "KeyArrowRight" });
    const nextButton = screen.getByRole("tab", { selected: true });
    expect(nextButton).toHaveTextContent("Tab3");
  });

  test("expect arrowLeft key to trigger prev tab in the list", () => {
    render(<Tabs tabs={tabsConfig} />);
    const button = screen.getByRole("tab", { selected: true });
    expect(button).toHaveTextContent("Tab1");
    fireEvent.keyDown(button, { key: "ArrowLeft", code: "KeyArrowLeft" });
    const nextButton = screen.getByRole("tab", { selected: true });
    expect(nextButton).toHaveTextContent("Tab5");
  });

  test("expect Home key to trigger first tab in the list", () => {
    render(<Tabs tabs={tabsConfig} />);
    const button = screen.getByRole("tab", { selected: true });
    expect(button).toHaveTextContent("Tab1");
    fireEvent.keyDown(button, { key: "ArrowRight", code: "KeyArrowRight" });
    fireEvent.keyDown(button, { key: "Home", code: "KeyHome" });
    const nextButton = screen.getByRole("tab", { selected: true });
    expect(nextButton).toHaveTextContent("Tab1");
  });

  test("expect End key to trigger last tab in the list", () => {
    render(<Tabs tabs={tabsConfig} />);
    const button = screen.getByRole("tab", { selected: true });
    expect(button).toHaveTextContent("Tab1");
    fireEvent.keyDown(button, { key: "End", code: "KeyArrowEnd" });
    const nextButton = screen.getByRole("tab", { selected: true });
    expect(nextButton).toHaveTextContent("Tab5");
  });

});
