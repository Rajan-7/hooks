import React from 'react'
import { useGlobal } from './usecontext/UseContext';


const Child = () => {
    const data = useGlobal(); 
  return (
    <>
      <p>Name is {data.name} & age is {data.age} </p>
    </>
  )
}

export default Child
