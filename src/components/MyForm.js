import React, { useState } from "react";

function MyForm(props) {
  const [myFormData, setMyFormData] = useState({ type: "", price: 0 });
 

  const submitClickHandler = (e) => {
    e.preventDefault()
    props.aaa(myFormData)
   setMyFormData({ type: "", price: 0 })
    
    
  };

  const typeClickHandler = (e) => {
    setMyFormData({ ...myFormData, type: e.target.value});
  };
  const costClickHandler = (e) => {
    setMyFormData({ ...myFormData, price: e.target.value });
  };

  return (
    <div>
      <form onSubmit={submitClickHandler}>
        <input type="text" placeholder="type" onChange={typeClickHandler} value={myFormData.type} />
        <input type="numbet" placeholder="amount" onChange={costClickHandler} value={myFormData.price} />
        <button>add</button>
      </form>
    </div>
  );
}

export default MyForm;
