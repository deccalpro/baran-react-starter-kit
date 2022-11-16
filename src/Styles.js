import { Title } from "./Components"
import Bootstrap from "./Bootstrap"
import './tailwind.css'
import Tailwind from "./Tailwind"
import styles from "./App.module.css"


function Styles() {
  return (
    <div className={styles.Styles}>
    <h3>{process.env.NODE_ENV}</h3>
    <p className="env">
      {process.env.REACT_APP_API_URL}
      <span>test5</span>
    </p>
      <Title>Trying messages</Title>
      <Title theme="dark">This is trying messages</Title>
      <Bootstrap/>
      <Tailwind/>
  </div>
  );
}

export default Styles