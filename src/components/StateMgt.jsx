import { useReducer } from "react";
import { valueChangeFn } from "../context/reducer";
import Button from "./Button";

const StateMgt = () => {
  const [state, dispatch] = useReducer(valueChangeFn, 0);
  return (
    <div className="px-6">
      <p className=" ">{state}</p>
      <div className="flex gap-5">
        <Button variant="green" action={() => dispatch({ type: "increment" })}>
          Increase
        </Button>
        <Button variant="blue" action={() => dispatch({ type: "reset" })}>
          Reset
        </Button>
        <Button variant="red" action={() => dispatch({ type: "decrement" })}>
          Decrease
        </Button>
        <Button
          variant="outline"
          action={() => dispatch({ type: "increment_by", payload: 10 })}
        >
          Increase By 10
        </Button>
      </div>
    </div>
  );
};

export default StateMgt;
