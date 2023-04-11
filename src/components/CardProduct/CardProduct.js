import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";



const CardProduct = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" alt="user" src={data.img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {data.precio}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardProduct;

