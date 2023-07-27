import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import categoriesSlice from "./categories/categoriesSlice";
import productsSlice from "./products/productsSlice";
import salesSliderSlice from "./salesSlider/salesSliderSlice";
import cartReducer from "./cart/cartSlice";
import typedValueSlice from "./filters/typedValueSlice";
import saleFilterSlice from "./filters/saleFilterSlice";
import stockFilterSlice from "./filters/stockFilterSlice";
import priceRangeSlice from "./filters/priceRangeSlice";
import productByIdSlice from "./productById/productByIdSlice";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"],
};

const rootReducer = combineReducers({
    categories: categoriesSlice,
    products: productsSlice,
    salesSlider: salesSliderSlice,
    cart: cartReducer,
    typedValue: typedValueSlice,
    saleFilter: saleFilterSlice,
    stockFilter: stockFilterSlice,
    priceRange: priceRangeSlice,
    productById: productByIdSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
    devTools: true,
});

export const persistor = persistStore(store);
