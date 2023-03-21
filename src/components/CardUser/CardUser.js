import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const CardUser = ({
  img,
  name,
  description,
  date,
  backgroundColor,
  children,
}) => {
  return (
    <Card sx={{ maxWidth: 345, background: backgroundColor }}>
      <CardActionArea>
        <CardMedia component="img" image={img} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {date}
          </Typography>
          <div>{children}</div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default CardUser;
