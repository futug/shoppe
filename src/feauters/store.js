import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import productsSlice from "./products/productsSlice";
import salesSliderSlice from "./salesSlider/salesSliderSlice";

export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productsSlice,
        salesSlider: salesSliderSlice,
    },
    devTools: true,
});
