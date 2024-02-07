import React, { useContext } from "react";
import { MyContext } from "./context";

function Operations({ props }) {
  const changeOperations = useContext(MyContext);
  let arr = ["+", "-", "/", "*"];  
  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          const elem = String(changeOperations.number.slice(-1));
          if (!changeOperations.number.length < 1 && !arr.includes(elem)) {
            changeOperations.setNumber([...changeOperations.number, props]);
          } else if (changeOperations.number.length >= 1 && !arr.includes(elem)) {
            console.log(arr.includes(elem));
            changeOperations.setNumber([...changeOperations.number, props])
          } else {
            changeOperations.setNumber([...changeOperations.number])
          }          
        }}
      >
        {props}
      </button>
    </div>
  );
}

export default Operations;
