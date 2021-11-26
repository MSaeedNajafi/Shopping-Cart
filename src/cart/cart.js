import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";

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
    // marginBottom: 10,
  },
  total: {
    // padding: "10px 20px",
    width: "100%",
    borderTop: " 1px solid #ccc",
  },
  prods: {
    border: "1px solid #ccc",
    marginBottom: 1,
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
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
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
                fontFamily: "Poppins, sans-serif",
              }}
              color="textSecondary"
            >
              x
            </Typography>
          </div>
        </Grid>
        <Grid item xs={10}>
          <div>{product.title}</div>
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
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
              }}
              color="black"
            >
              €{productTotalPrice(product).toFixed(2)}
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
        return parseFloat(acc + (current.quantity || 1));
      }, 0)
      .toFixed(0);
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ display: "flex" }}
    >
      <Grid item xs={12} className={classes.count}>
        <Grid container justifyContent="center">
          Cart ({countProducts()} products)
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.cart}>
        {props.products.length ? (
          props.products.map(showProduct)
        ) : (
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            justifyContent="center"
          >
            Shopping cart is empty.
          </Grid>
        )}
      </Grid>
      <Grid item xs={12} className={classes.total}>
        <Grid container alignSelf="flex-end" justifyContent="center">
          Total Amount: €{props.products.reduce(calculateTotal, 0).toFixed(2)}
        </Grid>
      </Grid>
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
