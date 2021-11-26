import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import StickyBox from "react-sticky-box/dist/esnext";

import ShowProducts from "./Product/products";
import Cart from "./cart/cart";
import cartReducer from "./reducers/cartReducer";

const useStyles = makeStyles(() => ({}));

const store = createStore(cartReducer, applyMiddleware(thunk));

function App() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item md={9} xs={12} style={{ backgroundColor: "#DCDCDC" }}>
            <ShowProducts />
          </Grid>
          <Grid item md={3} xs={12}>
            <StickyBox offsetTop={20} offsetBottom={20}>
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
              >
                <Cart />
              </Grid>
            </StickyBox>
          </Grid>
        </Grid>
      </Box>
    </Provider>
  );
}
export default App;
