import React from 'react'
import { useContext } from 'react';
import { AppContext } from './usecontext/UseContext';

const Child = () => {
    const data = useContext(AppContext); 
  return (
    <>
      <p>Name is {data.name} & age is {data.age} </p>
    </>
  )
}

export default Child
