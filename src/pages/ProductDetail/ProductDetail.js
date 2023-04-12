import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardProduct from "../../components/CardProduct/CardProduct";

const ProductDetail = () => {
  const [Product, setProductos] = useState({});

  let { id } = useParams();

  useEffect(() => {
    fetch ('../data.json').then((res) => res.json())
    .then((data)=> setProductos(data.find(producto => producto.id ===id)))
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "20%",
        paddingBottom: "10%",
      }}
    >
      <h1>Product Detail</h1>
      <CardProduct data={Product} />
    </div>
  );
};

export default ProductDetail;
