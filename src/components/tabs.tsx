import { useRef, useState } from "react";

interface ITabsData {
  icon: string;
  label: string;
  content: string;
}

interface ITabs {
  tabsConfig: ITabsData[];
  defaultIndex?: number;
}

const Tabs = ({ tabsConfig, defaultIndex }: ITabs) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex ?? 0);
  const tabRefs:any = useRef({});

  const setIndex = (index:number) => {
    const tab = tabRefs.current[index];
    if (tab) {
      // focus() will call the state setter 
      // to display the associated tabpanel
      tab.focus();
    }
  };

  const onKeyDown = (event:any) => {
    const count = tabsConfig.length;
    const nextTab = () => setIndex((selectedIndex + 1) % count);
    const prevTab = () => setIndex((selectedIndex - 1 + count) % count);
    const firstTab = () => setIndex(0);
    const lastTab = () => setIndex(count - 1);

    const keyMap:any = {
      ArrowRight: nextTab,
      ArrowLeft: prevTab,
      Home: firstTab,
      End: lastTab,
    };

    const action = keyMap[event.key];
    if (action) {
      event.preventDefault();
      action();
    }
  };


  const handleClick = (index: number) => setSelectedIndex(index);
  return (
    <>
      <div role="tablist" aria-orientation="horizontal">
        {tabsConfig.map((tab: ITabsData, index: number) => (
          <button
            key={`tab-${index}`}
            ref={(element) => (tabRefs.current[index] = element)}
            onClick={() => handleClick(index)}
            onKeyDown={onKeyDown}
            onFocus={() => setSelectedIndex(index)}
            tabIndex={selectedIndex === index ? 0 : -1}
            role="tab"
            aria-controls={`panel-id-${index}`}
            aria-selected={selectedIndex === index}
            id={`tab-id-${index}`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabpanel-wrapper">
        {tabsConfig.map((tab, index) => (
          <section 
            tabIndex={0}
            key={`tabpanel-${index}`}
            hidden={selectedIndex !== index}
            role="tabpanel"
            aria-labelledby={`tab-id${index}`}
            id={`panel-id-${index}`}
        >
            {tab.content}
          </section>
        ))}
      </div>
    </>
  );
};

export default Tabs;
