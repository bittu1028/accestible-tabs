import React from 'react';
import './App.css';
import Tabs from './components/Tabs';

const tabsConfig = [
  {
    label: "Tab1",
    content: "Content Panel 1",
    isDisabled: false,
  },
  {
    label: "Tab2",
    content: "Content Panel 2",
    isDisabled: true,
  },
  {
    label: "Tab3",
    content: "Content Panel 3",
    isDisabled: false,
  }, {
    label: "Tab4",
    content: "Content Panel 4",
    isDisabled: false,
  }, {
    label: "Tab5",
    content: "Content Panel 5",
    isDisabled: false,
  },
];

function App() {
  return (
    <div className="App">
        <Tabs tabs={tabsConfig} />
    </div>
  );
}

export default App;
