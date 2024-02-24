import React from "react";
import Child from "./Child";

const Parent = () => {
  return (
    <>
      <section className="parent">
        <h3>Hi ✋ Parent HeRE</h3>
        <Child />
      </section>
    </>
  );
};

export default Parent;
