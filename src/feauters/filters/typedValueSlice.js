// В файле features/typedValue/typedValueSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const typedValueSlice = createSlice({
    name: "typedValue",
    initialState,
    reducers: {
        updateTypedValue: (state, action) => {
            return action.payload;
        },
    },
});

export const { updateTypedValue } = typedValueSlice.actions;
export default typedValueSlice.reducer;
