import React, { useReducer } from 'react'
import counter from './counter';

const UseReducer = () => {
    const initial = 0;
    const [count,dispatch] = useReducer(counter,initial);
  return (
    <>
      <section>
        <div className=" flex">
            <button onClick={()=>dispatch({type:"IN"})}>+</button>
            <p className='t_a'>{count}</p>
            <button onClick={()=>dispatch({type:"DE"})}>-</button>
        </div>
      </section>
    </>
  )
}

export default UseReducer
