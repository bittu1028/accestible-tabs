import '@testing-library/jest-dom';
import { getNextTab, getPrevTab } from '../tabUtils';
import { tabsConfig } from '../mockData';

describe('Tab Utils', () => {
    test('getNextTab should  return next tab index to right', async () => {
        const nextTabIndex = getNextTab(2, tabsConfig);
        expect(nextTabIndex).toEqual(2);

    });

    test('getNextTab should not return disabled tab index', async () => {
        const nextTabIndex = getNextTab(1, tabsConfig);
        expect(nextTabIndex).toEqual(2);

    });

    test('getPrevTab should  return prev tab index to left', async () => {
        const prevTabIndex = getPrevTab(3, tabsConfig);
        expect(prevTabIndex).toEqual(3);

    });

    test('getPrevTab should not return disabled tab index', async () => {
        const prevTabIndex = getPrevTab(1, tabsConfig);
        expect(prevTabIndex).toEqual(0);

    });
  
  });