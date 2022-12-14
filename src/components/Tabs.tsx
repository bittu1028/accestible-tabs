import { useEffect, useRef, useState } from "react";
import { Tab, TabItem, TabList, TabPanel, Wrap } from "./StyledTab";
import { getNextTab, getPrevTab } from "../utils/tabUtils";
import { ITabs, ITabsData } from "./Tabs.type";

const Tabs = ({ tabs, id }: ITabs) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].label);

  // Store the tab element references here
  const tabRefs: any = useRef({});

  useEffect(() => {
    let hashVal = window.location.hash;
    handleRouter(hashVal);
  }, []);

  const handleRouter = (hashVal: string) => {
    if (hashVal) {
      const tabId = hashVal.substring(1).split("-");
      const currentTab =
        tabs.find((item) => item.label === tabId[0]) || tabs[0];
      if (!currentTab.isDisabled) {
        setActiveTab(tabId[0]);
        focusTab(currentTab);
      }
    } else {
      focusTab(tabs[0]);
    }
  };

  const handleClick =
    (tab: ITabsData) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      focusTab(tab);
      setActiveTab(tab.label);
    };

  const getId = (...rest: any) => [...rest].join("-");

  const focusTab = (tab: ITabsData) => {
    setActiveTab(tab.label);
    // Get the reference from the `tabRefs` and actual move focus to the tab
    tabRefs.current[tab.label].focus();
  };

  useEffect(() => {
    const onHashChanged = () => {
      let hashVal = window.location.hash;
      handleRouter(hashVal);
    };

    window.addEventListener("hashchange", onHashChanged);

    return () => {
      window.removeEventListener("hashchange", onHashChanged);
    };
  }, []);

  //key board navigation
  const handleKeyboard =
    (currentTabIndex: number) =>
    (event: React.KeyboardEvent<HTMLAnchorElement>) => {
      const tabCount = tabs.length;
      const firstTab = tabs[0];
      const lastTab = tabs[tabCount - 1];
      const nextTab = tabs[getNextTab(currentTabIndex + 1, tabs)];
      const prevTab = tabs[getPrevTab(currentTabIndex - 1, tabs)];

      if (event.key === "ArrowRight") {
        if (tabCount > currentTabIndex + 1) return focusTab(nextTab);
        return focusTab(firstTab);
      }

      if (event.key === "ArrowLeft") {
        if (currentTabIndex > 0) return focusTab(prevTab);
        return focusTab(lastTab);
      }

      if (event.key === "Home") {
        event.preventDefault();
        return focusTab(firstTab);
      }

      if (event.key === "End") {
        event.preventDefault();
        return focusTab(lastTab);
      }
    };

  return (
    <Wrap>
      <TabList aria-orientation="horizontal" role="tablist">
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab.label;

          return (
            <TabItem isDisabled={tab.isDisabled} key={tab.label}>
              <Tab
                aria-selected={isActive}
                aria-disabled={tab.isDisabled}
                id={getId(tab.label)}
                aria-controls={getId(tab.label, "tabpanel")}
                href={"#" + getId(tab.label, "tabpanel")}
                onClick={handleClick(tab)}
                isActive={isActive}
                isDisabled={tab.isDisabled}
                onKeyDown={handleKeyboard(index)}
                tabIndex={isActive ? 0 : -1}
                ref={(ref) => (tabRefs.current[tab.label] = ref)}
                role="tab"
              >
                {tab.label}
              </Tab>
            </TabItem>
          );
        })}
      </TabList>
      {tabs.map((tab) => (
        <TabPanel
          aria-labelledby={getId(tab.label)}
          id={getId(tab.label, "tabpanel")}
          hidden={activeTab !== tab.label}
          key={tab.label}
          tabIndex={0}
          role="tabpanel"
        >
          {tab.content}
        </TabPanel>
      ))}
    </Wrap>
  );
};

export default Tabs;
