import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from './components/tabs';

const tabsConfig = [
  {
    label: "Tab1",
    content: "Content Panel 1",
    icon: "😍"
  },
  {
    label: "Tab2",
    content: "Content Panel 2",
    icon: "🤓"
  }
];

function App() {
  return (
    <div className="App">
        <Tabs tabsConfig={tabsConfig} />
    </div>
  );
}

export default App;
