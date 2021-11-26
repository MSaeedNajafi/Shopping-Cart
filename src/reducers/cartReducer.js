const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";
const REMOVE_PRODUCT_FROM_CART_TOTAL = "REMOVE_PRODUCT_FROM_CART_TOTAL";

export const addProductToCart = (product) => ({
  type: ADD_PRODUCT_TO_CART,
  product,
});

export const removeProductFromCart = (product) => ({
  type: REMOVE_PRODUCT_FROM_CART,
  product,
});

export const removeProductFromCartTotal = (product) => ({
  type: REMOVE_PRODUCT_FROM_CART_TOTAL,
  product,
});

const cartReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      const addedProduct = action.product;
      const productId = addedProduct.id;
      const exists = state.products.some((p) => p.id === productId);
      if (exists) {
        const products = state.products.map((p) =>
          p.id === productId
            ? {
                ...p,
                quantity: p.quantity + 1,
              }
            : p
        );
        return {
          ...state,
          products,
        };
      } else {
        return {
          ...state,
          products: [
            ...state.products,
            {
              ...addedProduct,
            },
          ],
        };
      }

    case REMOVE_PRODUCT_FROM_CART:
      if (action.product.quantity > 1) {
        const products = state.products.map((p) =>
          p.id === action.product.id
            ? {
                ...p,
                quantity: p.quantity - 1,
              }
            : p
        );
        return {
          ...state,
          products,
        };
      } else {
        return {
          ...state,
          products: state.products.filter(
            (item) => item.id !== action.product.id
          ),
        };
      }

    case REMOVE_PRODUCT_FROM_CART_TOTAL:
      return {
        ...state,
        products: state.products.filter(
          (item) => item.id !== action.product.id
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
