import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import phonesReducer from "./phones/phones-slice";
import filterReducer from "./filter/filter-slice";

const rootReducer = combineReducers({
    phones: phonesReducer,
    filter: filterReducer,
})

const persistConfig = {
    key: 'contacts-phones',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer;