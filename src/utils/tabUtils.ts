import { ITabsData } from "../components/Tabs.type";


export const isTabDisabled = (tab:ITabsData) => {
    return tab && tab.isDisabled;
}

export const getTab = (index: number, tabs: ITabsData[]) => {
    return tabs[index];
}

export const getNextTab =(index:number, tabs: ITabsData[]) => {
  // Look for non-disabled tab from index to the last tab on the right;
  const count  = tabs.length;
  for (let i = index; i < count; i++) {
    const nextTab = getTab(i, tabs);
    if (!isTabDisabled(nextTab)) {
      return i;
    }
  }
  return index;
}

export const getPrevTab =(index:number, tabs: ITabsData[]) => {
    // Look for non-disabled tab from index to the first tab on the left
    for (let i = index; i >= 0; i--) {
      const prevTab = getTab(i, tabs);
      if (!isTabDisabled(prevTab)) {
        return i;
      }
    }
    return index;
}