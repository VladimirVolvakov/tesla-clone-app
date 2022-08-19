// Redux toolkit:
import { configureStore } from '@reduxjs/toolkit';
// Reducer:
import carReducer from "../features/car/carSlice";

export const store = configureStore({
  reducer: {
    car: carReducer
  },
});
