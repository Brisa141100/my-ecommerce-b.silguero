
import "./CardList.css";
import CardProduct from "../CardProduct/CardProduct";
import json from "../json/data"
import { Link } from "react-router-dom";
let Product = []

const CardList = () => {
    
     fetch (json)
     .then ((res) => res.json())
     .then((data) => {Product=data})
  
    return (
      <div className="Cards-List">
        {Product.map((Product) => {
          return (
            <div key={Product.id}>
              <Link to={`/user-detail/${Product.id}`}>
                <CardProduct data={Product} />
              </Link>
            </div>
          );
        })}
      </div>
    );
  };
  

  export default CardList;
