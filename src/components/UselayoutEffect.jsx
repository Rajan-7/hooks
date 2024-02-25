import React, { useLayoutEffect, useState } from 'react'

const UselayoutEffect = () => {
    const [num,setNum]=useState();

    useLayoutEffect(()=>{
        if(num === 0) setNum(num + (Math.random()*100))
    },[num])
  return (
    <>
      <section>
        <div className="container">
            <p>Your random number is {num} </p>
            <button onClick={()=>setNum(0)} className='ss'>Random</button>
        </div>
      </section>
    </>
  )
}

export default UselayoutEffect
