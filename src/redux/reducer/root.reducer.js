import { combineReducers } from "@reduxjs/toolkit";
import { productsReducer } from "./Product.Reducer";
import { categoryReducer } from "./Category.reducer";

export const rootReducer = combineReducers({
    product:productsReducer,
    category:categoryReducer
})