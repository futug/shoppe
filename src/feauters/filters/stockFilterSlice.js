import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const stockFilterSlice = createSlice({
    name: "stockFilter",
    initialState,
    reducers: {
        updateStockFilter: (state, action) => {
            return action.payload;
        },
    },
});

export const { updateStockFilter } = stockFilterSlice.actions;
export default stockFilterSlice.reducer;
