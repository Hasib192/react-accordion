import { useState } from "react";
import "./App.css";
import Title from "./components/title/Title";
import Accordion from "./components/accordion/Accordion";
import data from "./data/data";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Title />
      <Accordion data={data} />
    </>
  );
}

export default App;
