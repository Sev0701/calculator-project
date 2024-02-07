import { useContext, useState } from "react";
import "./App.css";
import Numbers from "./Numbers";
import { MyContext } from "./context";
import Operations from "./Operations";
import Equal from "./Equal";
import Acdel from "./Acdel";

let arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let arr1 = ["+", "-", "*", "/"];

let newArr = arr.map((e, i) => { return <Numbers key={i} props={e} />});
let newArr1 = arr1.map((e, i) => { return < Operations key={i} props={e} />})

function App() {

  const [number, setNumber] = useState([]);

  return (
    <div className="App">
      <input type="text" value={number.join("")}></input>
      <MyContext.Provider value={{ number: number, setNumber: setNumber }}>
        <div className="numbers">{newArr} <Acdel /></div>
        <div className="operations">{newArr1}</div>
        <Equal /> 
      </MyContext.Provider>
    </div>
  );
}

export default App;
