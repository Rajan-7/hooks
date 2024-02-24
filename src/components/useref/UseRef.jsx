import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
    const [user,setUser]=useState('');
    const count = useRef(0);

    useEffect(()=>{
        count.current =count.current + 1;
    })
  return (
    <>
      <section>
        <div className="container">
          <input
            type="text"
            name="username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <p>
            The number of time it rendered {count.current}
          </p>
        </div>
      </section>
    </>
  );
};

export default UseRef;
