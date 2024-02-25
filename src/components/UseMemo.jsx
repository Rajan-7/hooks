import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [value, setValue] = useState(0);
  const [show, setShow] = useState(false);

  const changeValue = () => {
    setValue(value + 1);
  };

  const setCounter = (v) => {
    console.log(v);
    return v;
  };

  const Changer = useMemo(() => {
    return setCounter(value);
  }, [value]);
  return (
    <>
      <section>
        <div className="container">
          <button className="ss" onClick={changeValue}>
            Counter
          </button>
          <p>Your number is {Changer}</p>
          <button className="ss" onClick={() => setShow(!show)}>
            {show ? "Button is clicked" : "Plz click me"}
          </button>
        </div>
      </section>
    </>
  );
};

export default UseMemo;
