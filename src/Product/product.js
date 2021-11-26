import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import { makeStyles } from "@mui/styles";
import ButtonBase from "@mui/material/ButtonBase";
import Button from "@mui/material/Button";
import { connect } from "react-redux";
import {
  addProductToCart,
  removeProductFromCart,
} from "../reducers/cartReducer";

const useStyles = makeStyles({
  root: {
    boxShadow: "0 18px 60px 0 rgba(15, 33, 37, 0.2)",
    display: "flex",
    justifyContent: "center",
  },
  media: {
    justifyContent: "center",
    height: 250,
    width: 250,
  },
  price: {
    color: "black",
  },
});

const Product = (props) => {
  const classes = useStyles();
  const item = props;

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justify="center"
      style={{ padding: 5 }}
    >
      <Grid item xs={12}>
        <Card className={classes.root}>
          <ButtonBase>
            <CardActionArea>
              <CardActions>
                <Grid
                  container
                  direction="row"
                  //   alignItems="center"
                  //   justify="center"
                  style={{ justifyContent: "space-evenly" }}
                >
                  <Button
                    size="large"
                    style={{ width: "10%", backgroundColor: "#345ee4" }}
                    onClick={() => props.addProduct(item)}
                  >
                    <Typography
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        color: "white",
                      }}
                      color="textSecondary"
                    >
                      +
                    </Typography>
                  </Button>
                  <Button
                    size="large"
                    style={{ width: "10%", backgroundColor: "#345ee4" }}
                    onClick={() => props.removeProduct(item)}
                  >
                    <Typography
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        color: "white",
                      }}
                      color="textSecondary"
                    >
                      -
                    </Typography>
                  </Button>
                </Grid>
              </CardActions>
              <CardMedia
                className={classes.media}
                image={item.img}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.title}
                </Typography>
                <Typography
                  variant="caption"
                  display="block"
                  gutterBottom
                  style={{ color: "#345ee4" }}
                >
                  {item.desc}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.price}
                >
                  € {item.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </ButtonBase>
        </Card>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
