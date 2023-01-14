import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const fetchData = createAsyncThunk("fetchData", async () => {
  const response = await axios.get("http://localhost:8000/products");
  console.log(response.data);
  return response.data;
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
