import React, { useState } from 'react'

function Cost({data,deletById}) {
    const[myPrice,setMyPrice]=useState(data.price)
    const clickHandler =()=>{
        setMyPrice(myPrice+1)

    }
    const deletHandler =()=>{
      deletById(data.id)
    }
  return (
    <div>
        <h1>{data.type}</h1>
        <h1>{myPrice}</h1>
        <button onClick={clickHandler}>change price</button>
        <button onClick={deletHandler}>delet</button>
      
    </div>
  )
}

export default Cost
