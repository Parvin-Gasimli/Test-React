import React,{useState,useEffect} from 'react'

import './index.css'
function App() {
// const [count ,SetCount]=useState(2);

// function increase(){
//   SetCount(oldvalue=>oldvalue+1)
// }
// function descrease(){
//   SetCount(oldvalue=>oldvalue-1)
// }
  
//   return (
//     <div>
//     <button onClick={descrease}>-</button>
//     <span>{count}</span>
//     <button onClick={increase}>+</button>
//     </div>
//   );
// 

const [counts ,SetCount]=useState(0);
const [button,setButton]=useState('user')
useEffect(()=>{
  console.log(`basilan button ${button}`)
},[counts])

return(
  <div>
    <div>
      <button onClick={()=>setButton("User")}>User</button>
      <button onClick={()=>setButton("Comments")}>Comments</button>
      <button onClick={()=>setButton("Post")}> Posts</button>
      <h1> {button}</h1>
    </div>
    <button onClick={()=>SetCount(counts+1)}> Count</button>
    <h1> </h1>
  </div>
)

}

export default App;
