import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import productsSlice from "./products/productsSlice";
import salesSliderSlice from "./salesSlider/salesSliderSlice";
import cartReducer from "./cart/cartSlice";
import typedValueSlice from "./filters/typedValueSlice";
import saleFilterSlice from "./filters/saleFilterSlice";
import stockFilterSlice from "./filters/stockFilterSlice";
import priceRangeSlice from "./filters/priceRangeSlice";

export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productsSlice,
        salesSlider: salesSliderSlice,
        cart: cartReducer,
        typedValue: typedValueSlice,
        saleFilter: saleFilterSlice,
        stockFilter: stockFilterSlice,
        priceRange: priceRangeSlice,
    },
    devTools: true,
});
