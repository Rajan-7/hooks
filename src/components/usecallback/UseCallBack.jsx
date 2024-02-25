import React, { useCallback, useState } from "react";
import Todo from "./Todo";

const UseCallBack = () => {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([]);

  const adder = () => {
    setCount(count + 1);
  };

  const addTodo = useCallback(()=>{
    return setTodo((prev)=>[...prev,"New Entry"]);
  },[]);


  return (
    <>
      <section>
        <div className="container">
          <Todo todo={todo} addTodo={addTodo}/>
          <p>Number : {count}</p>
          <button onClick={adder}>+</button>
        </div>
      </section>
    </>
  );
};

export default UseCallBack;
