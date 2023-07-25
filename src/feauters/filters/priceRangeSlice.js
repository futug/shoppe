import { createSlice } from "@reduxjs/toolkit";
import { MIN, MAX } from "../../utils/constants";

const initialState = [100, 3000];

const priceRangeSlice = createSlice({
    name: "priceRange",
    initialState,
    reducers: {
        updatePriceRange: (state, action) => {
            return action.payload;
        },
    },
});

export const { updatePriceRange } = priceRangeSlice.actions;
export default priceRangeSlice.reducer;
