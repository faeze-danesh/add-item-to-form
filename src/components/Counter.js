import React, { useState } from 'react'

function Counter() {
    const[number,setNumber]=useState(0)
   const incClickHandler=()=>{
    setNumber(number+1)

    }
    const decClickHandler=()=>{
        if(number>0) setNumber(number-1)


    }

  return (
    <div>
        <button onClick={incClickHandler}>+</button>
        <label>{number}</label>
        <button onClick={decClickHandler}>-</button>
      
    </div>
  )
}

export default Counter
