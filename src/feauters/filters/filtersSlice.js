// features/filters/filtersSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { MIN, MAX } from "../../utils/constants";

const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        values: [MIN, MAX],
        typedValue: "",
        saleStatus: false,
        stockStatus: false,
    },
    reducers: {
        setValues: (state, action) => {
            state.values = action.payload;
        },
        setTypedValue: (state, action) => {
            state.typedValue = action.payload;
        },
        setSaleStatus: (state, action) => {
            state.saleStatus = action.payload;
        },
        setStockStatus: (state, action) => {
            state.stockStatus = action.payload;
        },
    },
});

export const { setValues, setTypedValue, setSaleStatus, setStockStatus } = filtersSlice.actions;

export default filtersSlice.reducer;
