import { combineReducers, Reducer } from "redux";

import { productReducer, ProductState } from "./Product/ProductReducer";

export interface AppState {
  productState: ProductState;
}

export const reducers: Reducer<AppState> = combineReducers<AppState>({
  productState: productReducer,
});
