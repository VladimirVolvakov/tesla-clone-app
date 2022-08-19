// Redux toolkit:
import { configureStore } from '@reduxjs/toolkit';
// Reducer:
import productReducer from "../features/product/productSlice";

export const store = configureStore({
  reducer: {
    product: productReducer
  },
});
