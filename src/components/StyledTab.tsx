import { isDisabled } from "@testing-library/user-event/dist/utils";
import styled from "styled-components";

interface ITabLink {
  isActive?: boolean;
  isDisabled: boolean;
}

export const Wrap = styled.div`
    margin-bottom: 20px;
    border: 1px solid #ccc;
    background-color: #f1f1f1;
    padding: 50px
})`;

export const TabList = styled.ul`
  display: flex;
  gap: 1px;
  list-style-type: none;
  margin: 0 0 1px;
`;

export const TabItem = styled.li`
  flex: 1 0 auto;
  opacity: ${(props:ITabLink) => props.isDisabled ? 0.4 : 1};
  margin: 0;
`;

// 1. Stretch the link to fill its parent
export const Tab = styled.a`
    background-color: ${(props: ITabLink) =>
      props.isActive ? "#ccc" : "#f1f1f1"};
    display: flex;
    pointer-events: ${(props:ITabLink) => props.isDisabled ? 'none' : 'all'};
    cursor: ${(props:ITabLink) => props.isDisabled ? 'default' : 'auto'};
    color: #0000007d;
    text-decoration: none;
    flex-grow: 1;
    padding: 10px 15px;
    text-transform: uppercase;
  `;

export const TabPanel = styled.section`
    background-color: #91a2911f;
    margin-bottom: 1px;
    border: 1px solid black;
    min-height: 400px;
    padding: 15px;
  `;
