import { configureStore } from "@reduxjs/toolkit";
import getDataSlice from "./slice/getDataSlice";
import addCardSlice from "./slice/cardSlice";

export const store = configureStore({
  reducer: {
    products: getDataSlice,
    cards: addCardSlice
  },
});
