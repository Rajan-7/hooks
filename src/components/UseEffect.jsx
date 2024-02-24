import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [width, setWidth] = useState(window.screen.width);

  const changer = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", changer);
    return () => {
      window.removeEventListener("resize", changer);
    };
  });
  return (
    <>
      <section>
        <h3>
          The size of window is <span>{width}</span>
        </h3>
      </section>
    </>
  );
};

export default UseEffect;
