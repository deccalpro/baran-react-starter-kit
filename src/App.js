import './tailwind.css'
import Button from "./Components/Button"
import Tab from "./Components/Tab"

function App() {
  return (
    <div>
      <div style={{padding: 20,}}>
        <Tab>
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
