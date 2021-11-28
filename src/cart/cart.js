import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AddCircleIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircleOutline";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import {
  removeProductFromCart,
  addProductToCart,
  removeProductFromCartTotal,
} from "../reducers/cartReducer";
/// the cost for post is  6,75 add it to the cart
const useStyles = makeStyles(() => ({
  count: {
    // padding: "10px 20px",
    borderBottom: "1px solid #ccc",
    width: "100%",
  },
  cart: {
    padding: "5px",
    width: "100%",
    // marginBottom: 10,
  },
  total: {
    // padding: "10px 20px",
    width: "100%",
    borderTop: " 1px solid #ccc",
  },
  prods: {
    border: "1px solid #ccc",
    marginBottom: 5,
  },
}));

const Cart = (props) => {
  console.log(props.products);
  const classes = useStyles();

  const calculateTotal = (total, currentProduct) => {
    return parseFloat(total + currentProduct.price * currentProduct.quantity);
  };

  const showProduct = (product, index) => (
    // <div key={index} style={{ padding: 10 }}>
    <Box
      sx={{ flexGrow: 1, padding: 2 }}
      // sx={{ borderBottom: 1 }}
      className={classes.prods}
      key={index}
    >
      <Grid container spacing={1}>
        <Grid item xs={1}>
          <div>
            <Typography
              style={{
                fontFamily: "Cursive, Poppins, sans-serif",
                fontSize: 14,
                // fontWeight: "bold",
              }}
              color="black"
            >
              {product.quantity}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={1}>
          <div>
            <Typography
              style={{
                fontFamily: "Cursive, Poppins, sans-serif",
                fontSize: 14,
              }}
              color="textSecondary"
            >
              x
            </Typography>
          </div>
        </Grid>
        <Grid item xs={10}>
          <div>
            <Typography
              style={{
                fontFamily: "Cursive, Poppins, sans-serif",
                fontSize: 14,
                color: "black",
              }}
              // color="textSecondary"
            >
              {product.title}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={7}>
          <div>
            <AddCircleIcon
              style={{ color: "#345ee4" }}
              onClick={() => {
                // console.log("index is: " + index);
                props.addProduct(product);
              }}
            />
            <RemoveCircleIcon
              style={{ color: "#345ee4" }}
              onClick={() => {
                // console.log("index is: " + index);
                props.removeProduct(product);
              }}
            />
            <DeleteIcon
              style={{ color: "darkred" }}
              onClick={() => {
                console.log("index is: " + index);
                props.removeFromCart(product);
              }}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          {/* <div> €{product.price}</div> */}
          <div>
            <Typography
              style={{
                fontFamily: "Cursive, Poppins, sans-serif",
                // fontWeight: "bold",
                fontSize: 14,
              }}
              color="black"
            >
              € {productTotalPrice(product).toFixed(2)}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Box>
    // </div>
  );

  const productTotalPrice = (product) => {
    return product.quantity * product.price;
  };

  const countProducts = () => {
    return props.products
      .reduce((acc, current) => {
        return parseFloat(acc + current.quantity);
      }, 0)
      .toFixed(0);
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      // justifyContent="center"
      // style={{ height: 910 }}
    >
      <Grid
        item
        xs={1}
        className={classes.count}
        // style={{ backgroundColor: "red" }}
      >
        <Grid
          container
          style={{ backgroundColor: "#0090ff" }}
          justifyContent="center"
        >
          <p
            style={{
              color: "#fff",
              fontSize: 18,
              fontWeight: 600,
              fontFamily: "Cursive",
            }}
          >
            Winkelmandje ({countProducts()} products)
          </p>
        </Grid>
      </Grid>
      <Grid item xs={11} className={classes.cart}>
        {props.products.length ? (
          <div>
            {props.products.map(showProduct)}
            <Grid
              container
              style={{ padding: 10 }}
              alignSelf="flex-end"
              justifyContent="space-between"
            >
              <p style={{ fontFamily: "Cursive" }}>Total Amount: </p>
              <p style={{ fontFamily: "Cursive" }}>
                € {props.products.reduce(calculateTotal, 0).toFixed(2)}
              </p>
            </Grid>
            <Button
              size="large"
              style={{
                width: "100%",
                backgroundColor: "#f76808",
                padding: 10,
              }}
              onClick={() => {}}
            >
              <Typography
                style={{
                  fontFamily: "Cursive,Poppins, sans-serif",
                  color: "white",
                  textTransform: "capitalize",
                  fontSize: 18,
                }}
                color="textSecondary"
              >
                Afrekenen
              </Typography>
            </Button>
          </div>
        ) : (
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{ height: 700 }}
          >
            Shopping cart is empty.
          </Grid>
        )}
      </Grid>
      {/* <Grid
        // style={{ backgroundColor: "red" }}
        item
        xs={1}
        className={classes.total}
      >
        <Grid
          container
          style={{ padding: 20 }}
          alignSelf="flex-end"
          justifyContent="center"
        >
          Total Amount: €{props.products.reduce(calculateTotal, 0).toFixed(2)}
        </Grid>
      </Grid> */}
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (product) => dispatch(addProductToCart(product)),
    removeProduct: (product) => dispatch(removeProductFromCart(product)),
    removeFromCart: (product) => dispatch(removeProductFromCartTotal(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
