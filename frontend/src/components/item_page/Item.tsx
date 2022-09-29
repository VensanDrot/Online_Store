import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Item.css";

interface Props  { 
    id: number;
    image: string;
    name: string;
    price: number;
    description: string;
};



const Item = () => {
  let { id } = useParams();
  const [item, Setitem] = useState({} as Props);

  const response = fetch("http://localhost:3001/item", {
    method: "post",
    body: JSON.stringify({ id }),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());

  
  useEffect(() => {
    response.then((data) => {
      Setitem(data);
    });
  }, []);
  console.log(item)

  return (
   <section id='item'>
        <div className='container item_container'> 
         <div className="image">
          <img src={item.image}></img>
         </div>
         <div className="description">
          <h1>{item.name}</h1>
          <h3 className="description1">{item.description}</h3>
          <h3>{item.price} $</h3>
          <button id={item.id} className="btn btn-primary text"  >Add to card</button>
         </div>
        </div>
   </section>
  )
}

export default Item