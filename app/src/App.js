import React, { useState, useEffect } from "react";
import Item from "./Item";
import Total from "./Total";
import "./App.css";
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

  const [Cart, SetCard] = useState([]);
  let ammount = 0;
  let itemCount = 0;
  useEffect(async () => {
    let data = await fetch("https://fakestoreapi.com/products?limit=12");
    let result = await data.json();
    SetCard(result);
    getItems();
  }, []);

  return (
    <>
      <h1 className="mycart">
        My Cart <p> {Cart.length} </p>
        <h4> Products</h4>
      </h1>
      <div className="main">
        <div className="itemsList">
          {Cart.map((item) => (
            <Item
              key={item.id}
              itemid={item.id}
              image={item.image}
              title={item.title}
              category={item.category}
              price={item.price}
            />
          ))}
        </div>

        {
          (Cart.forEach((item) => (ammount = ammount + item.price)),
          (<Total totalprice={ammount.toFixed(2)} />))
        }
      </div>
    </>
  );
  function getItems() {
    let cartItems = document.querySelectorAll(".Cartitem");
    cartItems.forEach((item, index) => {
      itemCount = cartItems.length;
      item.querySelector(".delete").classList.add("visible");
      item.addEventListener("click", (e) => {
        switch (e.target.textContent) {
          case "+": {
            let count = item.querySelector(".amount").textContent;
            let ProductPrice = item.querySelector(".details h2").textContent;
            count++;
            if (count > 1) {
              item.querySelector(".delete").classList.remove(".visible");
            }
            item.querySelector(".amount").textContent=count;
            item.querySelector(".details h5").textContent=(ProductPrice*cartItems).toFixed(2)+"$";
            let tprice=Math.max(document.querySelector(".checkout h4").textContent);
            let cargofree=tprice+(ProductPrice*count)
            if(cargofree>500)
            {
              document.querySelector(".freeshipping").classList.add("visible")
              document.querySelector(".cargoamount").classList.add("cargopricedelete")
            }
            else{
              document.querySelector(".freeshipping").classList.remove("visible")
              document.querySelector(".cargoamount").classList.remove("cargopricedelete")

            }
            document.querySelector(".checkout h4").textContent=Math.fround(tprice+ProductPrice*1).toFixed(2);
            document.querySelector(".orderamount").textContent=document.querySelector(".checkout h4").textContent+"$";
            break;
          }
          case"-":
          {
            let count = item.querySelector(".amount").textContent;
            if(count!=1){
            let ProductPrice = item.querySelector(".details h2").textContent;
          
            count--;
            if (count > 1) {
              item.querySelector(".delete").classList.remove("visible");
     
            }
            item.querySelector(".amount").textContent=count;
            item.querySelector(".details h5").textContent=(ProductPrice*cartItems).toFixed(2)+"$";
            let tprice=Math.max(document.querySelector(".checkout h4").textContent);
            let cargofree=tprice-(ProductPrice*count)
            if(cargofree<500)
            {
              document.querySelector(".freeshipping").classList.add("visible")
              document.querySelector(".cargoamount").classList.add("cargopricedelete")
            }
            else{
              document.querySelector(".freeshipping").classList.remove("visible")
              document.querySelector(".cargoamount").classList.remove("cargopricedelete")

            }
            document.querySelector(".checkout h4").textContent=Math.fround(tprice-ProductPrice*1).toFixed(2);
            document.querySelector(".orderamount").textContent=document.querySelector(".checkout h4").textContent+"$";

            break;
           }
           
          } case"Deleted":{
            let productPrice=item.querySelector(".details h2")
            .textContent;
            let tPrice=Math.max(document.querySelector(".checkout h4").textContent);
            document.querySelector(".checkout h4").textContent=Math.max(tPrice-productPrice*1).toFixed(2);
            document.querySelector(".orderamount").textContent=document.querySelector(".checkout h4").textContent+"$"

            cartItems.item(index).getElementsByClassName.
            animation="removeanimation 0.5s linear";
            cartItems.item(index).addEventListener("animatonend",()=>{
              cartItems.item(index).remove();
              itemCount--;
              document.querySelector(".mycart p").textContent=itemCount
            })
            break;
          }
         
        }
      });
    });
  }
}

export default App;
