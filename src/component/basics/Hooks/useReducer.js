import React, { useEffect, useReducer, useState } from 'react'
import "./style.css";

const reducer = (state, action) => {
  if(action.type === "INCR")
    state = state + 1;
  if(state > 0 && action.type === "DECR")
    state = state - 1;
  if(action.type === "add")
    state = state + 2;
   return state;
}
const  UseReducer = () => {
  const initialData = 0;
    const [state, dispatch] = useReducer(reducer, initialData)
  return (
    <>
      <div className='main'>
        <p>{state}</p>
        <button className='button' onClick={() => dispatch({type : "INCR"})}>INCR</button>
        <button className='button' onClick={() => dispatch({type : "DECR"})}>DECR</button>
        <button className='button' onClick={() => dispatch({type : "add"})}>ADD</button> 
      </div>
    </>
  )
};
export default UseReducer;
