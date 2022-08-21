// Redux toolkit:
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      name: "Model S",
      sectionName: "model-s"
    }, 
    {
      name: "Model Y",
      sectionName: "model-y"
    }, 
    {
      name: "Model 3",
      sectionName: "model-3"
    }, 
    {
      name: "Model X",
      sectionName: "model-x"
    }, 
    {
      name: "Solar Panels",
      sectionName: "solar-panels"
    },
    {
      name: "Solar Roof",
      sectionName: "solar-roofs"
    }, 
    {
      name: "Accessories",
      sectionName: "accessories"
    }]
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {}
});

export const selectProduct = state => state.product.products;

export default productSlice.reducer;