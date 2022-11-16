import styles from './App.module.css'
import { Title } from "./Components"
import Bootstrap from "./Bootstrap"
import './tailwind.css'
import Tailwind from "./Tailwind"

function App() {

  return (
    <div className={styles.App}>
      <h3>{process.env.NODE_ENV}</h3>
      <p>
        {process.env.REACT_APP_API_URL}
      </p>
        <Title>Trying messages</Title>
        <Title theme="dark">This is trying messages</Title>
        <Bootstrap/>
        <Tailwind/>
    </div>
  );
}
export default App;
