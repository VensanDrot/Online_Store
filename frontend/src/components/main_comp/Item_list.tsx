import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./item.css";



const Item_list = () => {
  const [Item, SetItem] = useState([]);

  const response = fetch("http://localhost:3001/items", {
    method: "get",
  }).then((res) => res.json());
  
  
  useEffect(() => {
    response.then((data) => {
      SetItem(data);
    });
  }, []);
  



  return (
    <section className="test">
      <div className="container ">
        <h1 id="h1">Item's For Sale</h1>
        <div className="portfolio_container">
          {Item.map((g) => {
            return (
              <article className="portfolio_item" key={g.id}>
                <div className="portfolio_item_img">
                  <img src={g.image} alt={g.image} />
                </div>
                <h3>{g.name}</h3>
                <h3>{g.price}</h3>
                <div className="portfolio_item_cta">
                <Link to={"/Item/"+g.id} className="btn">
                Learn more
                </Link>
                 
                  <a className="btn btn-primary">Add to card</a>
                </div>
              </article>
            );
          })}
        </div>
        <div className="Delivery">
          <a href="" className="btn btn-primary">
            Free Standart Delivery On All Orders
          </a>
          <a href="" className="btn">
            Gift Cards
          </a>
        </div>
      </div>
    </section>
  );
};

export default Item_list;
