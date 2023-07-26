import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        addedToCart: false,
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
            state.addedToCart = true;
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
        incrementQuantity: (state, action) => {
            const { id } = action.payload;
            const foundItem = state.items.find((item) => item.id === id);

            if (foundItem) {
                foundItem.quantity += 1;
            }
        },
        dicrementQuantity: (state, action) => {
            const { id } = action.payload;
            const foundItem = state.items.find((item) => item.id === id);

            if (foundItem) {
                foundItem.quantity -= 1;
                if (foundItem.quantity <= 1) {
                    state.items = state.items.filter((item) => item.id !== id);
                }
            }
        },
    },
});

export const { addToCart, removeFromCart, addToCartSuccess, incrementQuantity, dicrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
