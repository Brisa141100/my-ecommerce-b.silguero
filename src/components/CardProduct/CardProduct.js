import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import React from "react";

const CardProduct = ({ data}) => {



  
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia className="cardimg" component="img" alt="user" src={data.img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${data.precio}
          </Typography> </CardContent>

      </CardActionArea>
    </Card>
  );
};

export default CardProduct;
