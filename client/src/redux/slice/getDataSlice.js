import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loading: false,
  data: {},
  error: "",
};

export const fetchData = createAsyncThunk("fetchData", async (id) => {
  const response = await axios.get("http://localhost:8000/products");
  let data = response.data;
  if (id === 1) {
    data?.allProducts?.sort((a, b) => a.name >  b.name ? 1 : -1);
    return data;
  } else if(id === 2) {
    data?.allProducts?.sort((a, b) => a.name >  b.name ? -1 : 1);
    return data;
  }
  else if(id === 3) {
    data?.allProducts?.sort((a, b) => +a.price -  +b.price);
    return data;
  }
  else if(id === 4) {
    data?.allProducts?.sort((a, b) => +b.price -  +a.price);
    return data;
  }
  else {
    return data;
  }
});

export const getData = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = "Data Not Found";
    });
  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default getData.reducer;
