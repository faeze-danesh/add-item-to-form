
import { useState } from "react";
import "./App.css";
import Cost from "./components/Cost";
import Counter from "./components/Counter";
import MyForm from "./components/MyForm";
import NewForm from "./components/NewForm";

function App() {
const[allCosts,setAllCosts]=useState([
 // {id:1,type:"laptop",price:'1200'},
 // {id:2,type:"mobile",price:'2200'},
 // {id:3,type:"course",price:'3200'},
])
const addItemToList =(item)=>{
  setAllCosts([...allCosts,item])
  
}
//const addItemToList2=(item)=>{
  
//  setAllCosts([...allCosts,item])

//}



  return (
    <div>
       <MyForm aaa={addItemToList} />
     {
      allCosts.map((item,)=>{
        return(
          <Cost key={item.id} data={item}/>
        )
      })
     }
 
 
 </div>
  )
}

export default App;
