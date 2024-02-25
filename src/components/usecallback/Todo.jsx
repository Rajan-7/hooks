import React from 'react'
import { memo } from 'react';

const Todo = ({todo,addTodo}) => {
    console.log("Render");
  return (
    <>
      <h3>MY TODO</h3>
      {todo.map((todos,index)=>{
        return <p key={index}>{todos +" "+ index}</p>
      })}
      <button onClick={addTodo} className='ss'>ADD</button>
    </>
  )
}

export default memo(Todo)
