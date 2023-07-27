import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

export const getProductById = createAsyncThunk("productById/getProductById", async (id) => {
    const response = await axios.get(`${BASE_URL}/products/${id}?populate=*`);
    return response.data.data;
});

const productByIdSlice = createSlice({
    name: "productById",
    initialState: {
        productById: {},
        isLoading: false,
        isRejected: false,
    },
    extraReducers: {
        [getProductById.pending]: (state) => {
            state.isLoading = true;
        },
        [getProductById.fulfilled]: (state, action) => {
            state.productById = action.payload;
            state.isLoading = false;
        },
        [getProductById.rejected]: (state) => {
            state.isLoading = false;
            state.isRejected = true;
            console.log("access denied");
        },
    },
});

export default productByIdSlice.reducer;
