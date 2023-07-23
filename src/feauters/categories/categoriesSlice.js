import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        list: [],
        isLoading: false,
    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.list = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getCategories.rejected, (state) => {
            state.isLoading = false;
            console.log("access denied");
        });
    },
});

export const getCategories = createAsyncThunk("categories/getCategories", async () => {
    const response = await axios.get(`${BASE_URL}/categories`);
    return response.data;
});

export default categoriesSlice.reducer;
