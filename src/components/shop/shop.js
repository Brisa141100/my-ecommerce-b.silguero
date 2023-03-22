import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Shop = () => {
    return (
        <div style= {{display:"flex"}}>
            <AddShoppingCartIcon sx= {{color: "black"}} />
            <span style={{ color: "black"}}>0</span>
        </div>
    );
};
export default Shop;