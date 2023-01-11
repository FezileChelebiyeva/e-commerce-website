import { configureStore } from "@reduxjs/toolkit";
import detDataSlice from "./slice/detDataSlice";

export const store = configureStore({
  reducer: {
    products: detDataSlice,
  },
});
