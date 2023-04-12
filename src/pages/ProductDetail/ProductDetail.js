import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardProduct from "../../components/CardProduct/CardProduct";

const ProductDetail = () => {
  const [Product, setProductos] = useState({});

  let { id } = useParams();

  useEffect(() => {
    fetch ('../data.json'`${id}`).then((res) => res.json())
    .then((data)=> setProductos(data))
  }, [id]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>User Detail</h1>
      <CardProduct data={Product} />
    </div>
  );
};

export default ProductDetail;
