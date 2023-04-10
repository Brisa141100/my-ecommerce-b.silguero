import React, { useEffect, useState } from "react";
import "./CardList.css";
import CardProduct from "../CardProduct/CardProduct";
import json from "../json/data"
import { Link } from "react-router-dom";


const CardList = () => {
  const [Product, setProductos] = useState([]);

  useEffect(() => {
    fetch (json).then((res) =>
      setProductos(res.data)
    );
  }, []);


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
