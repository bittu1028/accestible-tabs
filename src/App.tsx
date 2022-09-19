import React from 'react';
import './App.css';
import Tabs from './components/Tabs';
import { tabsConfig } from './utils/mockData';



function App() {
  return (
    <div className="App">
        <Tabs tabs={tabsConfig} />
    </div>
  );
}

export default App;
