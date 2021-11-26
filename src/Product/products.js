import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Product from "./product";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
  },
}));

const items = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/4068383/pexels-photo-4068383.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    title: "Corona Beer 1",
    desc: "330ml Bottle, 4,6% Alcohol ",
    category: "American",
    price: 1.0,
    quantity: 1,
  },
  {
    id: 2,
    img: "https://produits.bienmanger.com/37397-0w470h470_Goliath_Blonde_Belgian_Beer.jpg",
    title: "Corona Beer 2",
    desc: "330ml Bottle, 4,6% Alcohol ",
    category: "American Lager 2",
    price: 2.0,
    quantity: 1,
  },
  {
    id: 3,
    img: "https://produits.bienmanger.com/37397-0w470h470_Goliath_Blonde_Belgian_Beer.jpg",
    title: "Corona Beer 3",
    desc: "330ml Bottle, 4,6% Alcohol ",
    category: "American Lager",
    price: 3.0,
    quantity: 1,
  },
  {
    id: 4,
    img: "https://cdn.webshopapp.com/shops/65337/files/89669294/650x750x2/leffe-blonde.jpg",
    title: "Corona Beer 4",
    desc: "330ml Bottle, 4,6% Alcohol ",
    category: "American Lager",
    price: 4.0,
    quantity: 1,
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/4068383/pexels-photo-4068383.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    title: "Corona Beer 5",
    desc: "330ml Bottle, 4,6% Alcohol ",
    category: "American Lager",
    price: 5.0,
    quantity: 1,
  },
  {
    id: 6,
    img: "https://cdn.webshopapp.com/shops/65337/files/89669294/650x750x2/leffe-blonde.jpg",
    title: "Corona Beer 6",
    desc: "330ml Bottle, 4,6% Alcohol ",
    category: "American Lager",
    price: 6.0,
    quantity: 1,
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/4068383/pexels-photo-4068383.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    title: "Corona Beer 7",
    desc: "330ml Bottle, 4,6% Alcohol ",
    category: "American Lager",
    price: 7.0,
    quantity: 1,
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/4068383/pexels-photo-4068383.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    title: "Corona Beer 8",
    desc: "330ml Bottle, 4,6% Alcohol ",
    category: "American Lager",
    price: 8.0,
    quantity: 1,
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/4068383/pexels-photo-4068383.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    title: "Corona Beer 9",
    desc: "330ml Bottle, 4,6% Alcohol ",
    category: "American Lager",
    price: 2.5,
    quantity: 1,
  },
  {
    id: 10,
    img: "https://cdn.webshopapp.com/shops/65337/files/89669294/650x750x2/leffe-blonde.jpg",
    title: "Corona Beer 10",
    desc: "330ml Bottle, 4,6% Alcohol ",
    category: "American Lager",
    price: 6.5,
    quantity: 1,
  },
];
const ShowProducts = () => {
  const [products, setProducst] = useState(items);
  const classes = useStyles();
  let content = [];
  products.map((index) => {
    content.push(
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Product
          id={index.id}
          img={index.img}
          title={index.title}
          desc={index.desc}
          category={index.category}
          price={index.price}
          quantity={index.quantity}
        />
      </Grid>
    );
  });
  return (
    // <Container maxWidth="lg">
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="flex-start"
      justifyContent="flex-start"
      className={classes.root}
    >
      {content}
    </Grid>
    // </Container>
  );
};

export default ShowProducts;
