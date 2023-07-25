import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const saleFilterSlice = createSlice({
    name: "saleFilter",
    initialState,
    reducers: {
        updateSaleFilter: (state, action) => {
            return action.payload;
        },
    },
});

export const { updateSaleFilter } = saleFilterSlice.actions;
export default saleFilterSlice.reducer;
