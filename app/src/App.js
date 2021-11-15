import React,{useState,useEffect} from 'react';
import Item from './Item';
import Total from './Total'
import './index.css';
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

// const [counts ,SetCount]=useState(0);
// const [button,setButton]=useState('user')
// useEffect(()=>{
//   console.log(`basilan button ${button}`)
// },[counts])

// return(
//   <div>
//     <div>
//       <button onClick={()=>setButton("User")}>User</button>
//       <button onClick={()=>setButton("Comments")}>Comments</button>
//       <button onClick={()=>setButton("Post")}> Posts</button>
//       <h1> {button}</h1>
//     </div>
//     <button onClick={()=>SetCount(counts+1)}> Count</button>
//     <h1> </h1>
//   </div>
// )


const [Cart,SetCard]=useState([]);
let ammount =0;
let itemCount=0;
useEffect(async()=>{
let data=await fetch("https://fakestoreapi.com/products?limit=12");
let result =await data.json();
SetCard(result);
getItems();
},[])

const getItems=()=>{

}

return(
  <>
  <h1>
    Sebetim <p> {Cart.length} </p>
    <h4> Product</h4>
  </h1>
  <div className="itemsList">
    {Cart.map((item)=> <Item
    key={item.id}
    itemid={item.id}
    image={item.image}
    title={item.title}
    category={item.category}
    price ={item.price}
    
    />)}

  </div>
  {
            (Cart.forEach((item)=>(ammount=ammount+item.price)),
            
          <Total totalprice={ammount.toFixed(2)}/> )
            
        
        }

  </>
)

}

export default App;
