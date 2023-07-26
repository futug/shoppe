import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const { id, quantity } = action.payload;
            const foundItem = state.items.find((item) => item.id === id);

            if (foundItem) {
                foundItem.quantity += quantity || 1;
            } else {
                state.items.push({ ...action.payload, quantity: quantity || 1 });
            }
        },
        removeFromCart: (state, action) => {
            const { id, quantity } = action.payload;
            const foundItem = state.items.find((item) => item.id === id);

            if (foundItem) {
                if (quantity && foundItem.quantity > quantity) {
                    foundItem.quantity -= quantity;
                } else {
                    state.items = state.items.filter((item) => item.id !== id);
                }
            }
        },
        addToCartSuccess: (state) => {
            state.addToCartSuccess = true;
        },
    },
});

export const { addToCart, removeFromCart, addToCartSuccess } = cartSlice.actions;

export default cartSlice.reducer;
