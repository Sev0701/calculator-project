import { useContext } from "react";
import "./Numbers.css";
import { MyContext } from "./context";

function Numbers({ props }) {
  const changeNumber = useContext(MyContext);
  let arr = ["+", "-", "*", "/"];

  return (
    <div className="Numbers">
      <button
        className="btn"
        onClick={(e) => {
          const elem = String(changeNumber.number.slice(-2, -1));
          if (e.target.innerHTML === "0") {
            if (changeNumber.number.length < 1) {
              changeNumber.setNumber([props]);
            } else if (
              arr.includes(elem) &&
              +changeNumber.number.slice(-1) === 0
            ) {
              changeNumber.setNumber([...changeNumber.number]);
            } else if (
              +changeNumber.number.slice(0, 1) !== 0 &&
              changeNumber.number.length >= 1
            ) {
              changeNumber.setNumber([...changeNumber.number, props]);
            }
          } else if (
            +changeNumber.number.slice(0, 1) === 0 &&
            changeNumber.number.length === 1
          ) {
            changeNumber.setNumber([props]);
          } else if (
            +changeNumber.number.slice(-1) === 0 &&
            changeNumber.number.length > 1 &&
            arr.includes(elem)
          ) {
            changeNumber.setNumber([...changeNumber.number]);
          } else {
            changeNumber.setNumber([...changeNumber.number, props]);
          }
        }}
      >
        {props}
      </button>
    </div>
  );
}

export default Numbers;
