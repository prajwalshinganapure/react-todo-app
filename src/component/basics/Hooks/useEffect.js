import React, { useEffect, useState } from 'react'
import "./style.css";


const  Useeffect = () => {
    const [value, setValue] = useState(0);

    useEffect(() =>{
        document.title = `chats(${value})`
    });
  return (
    <>
      <div className='main'>
        <p>{value}</p>
        <button className='button' onClick={() => setValue(value + 1)}>INCR</button>
      </div>
    </>
  )
}

export default Useeffect
