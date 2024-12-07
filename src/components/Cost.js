import React, { useState } from 'react'

function Cost({data}) {
    const[myPrice,setMyPrice]=useState(data.price)
    const clickHandler =()=>{
        setMyPrice(myPrice+1)

    }
  return (
    <div>
        <h1>{data.type}</h1>
        <h1>{myPrice}</h1>
        <button onClick={clickHandler}>change price</button>
      
    </div>
  )
}

export default Cost
