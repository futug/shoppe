import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        productsList: [],
        isLoading: false,
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.productsList = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getProducts.rejected, (state) => {
            state.isLoading = false;
            console.log("access denied");
        });
    },
});

export const getProducts = createAsyncThunk("products/getProducts", async () => {
    const response = await axios.get(`${BASE_URL}/products?populate=*`);
    return response.data.data;
});

export default productsSlice.reducer;
