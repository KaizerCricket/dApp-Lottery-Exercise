import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CardContainer({ title, description }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent sx={{p:0}}>
        <Typography gutterBottom variant="h5" component="div" sx={{ bgcolor: 'lightgray', borderRadius: 1, p: 2}}>
          {title}
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{p:1}}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}