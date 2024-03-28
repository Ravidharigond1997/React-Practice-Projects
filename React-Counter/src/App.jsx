import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const countNumber = () => {
    setCount(count + 1);
  };

  const removeNumber = () => {
    count == 0 ? setCount(0) : setCount(count - 1);
  };

  return (
    <>
      <h1>React Counter</h1>
      <h4>Counter Value {count}</h4>
      <button onClick={countNumber}>Add Number</button>
      <br />
      <button onClick={removeNumber}>Remove Number</button>
    </>
  );
}

export default App;
