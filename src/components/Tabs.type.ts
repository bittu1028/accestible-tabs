export interface ITabsData {
  label: string;
  content: string;
  isDisabled: boolean;
}

export interface ITabs {
  tabs: ITabsData[];
  id?: number;
}
