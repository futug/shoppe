import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage в качестве хранилища
import { combineReducers } from "redux"; // Импортируем функцию для объединения редьюсеров
import categoriesSlice from "./categories/categoriesSlice";
import productsSlice from "./products/productsSlice";
import salesSliderSlice from "./salesSlider/salesSliderSlice";
import cartReducer from "./cart/cartSlice";
import typedValueSlice from "./filters/typedValueSlice";
import saleFilterSlice from "./filters/saleFilterSlice";
import stockFilterSlice from "./filters/stockFilterSlice";
import priceRangeSlice from "./filters/priceRangeSlice";

const persistConfig = {
    key: "root",
    storage,
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
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: false, // Избегаем ошибок сериализации, так как используем redux-persist
    }),
    devTools: true,
});

export const persistor = persistStore(store);
