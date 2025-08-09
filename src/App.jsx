import Counter from "./Counter";
import "./App.css";
import Team from "./Team";
import Users from "./Users";
import Friends from "./Friends";


function App() {
  function handleClick() {
    alert("button clicked");
  }
  function handleClick2() {
    alert("another button clicked");
  }

  const addToFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
    <Friends></Friends>
      <h3>React Core concept</h3>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me 2</button>
      <button onClick={() => addToFive(3)}>Click me 3</button>
      <Counter></Counter>
     <Team></Team>
     <Users></Users>
    </>
  );
}

export default App;
