import './tailwind.css'
import Button from "./Components/Button"
import Tab from "./Components/Tab"
import { useState } from "react"

function App() {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div>
      <div style={{padding: 20,}}>
        <button onClick={() => setActiveTab(activeTab === 2 ? 0 : activeTab+1)}>
          Change active tab!
        </button>
        <Tab activeTab={activeTab} setActiveTab={setActiveTab}>
          <Tab.Panel title="Profile">1. Tab</Tab.Panel>
          <Tab.Panel title="About">2. Tab</Tab.Panel>
          <Tab.Panel title="Settings">3. Tab</Tab.Panel>
        </Tab>
      </div>

      <div style={{padding: 20,}}>
        <Button text="Button example" />
        <Button text="Button example" variant="success"/>
        <Button text="Button example" variant="danger"/>
        <Button text="Button example" variant="warning"/>
      </div>
    </div>
  );
}
export default App;
