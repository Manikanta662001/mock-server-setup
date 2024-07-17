import { combineReducers, configureStore } from "@reduxjs/toolkit";
import fetchusersSliceReducer from "./features/fetchusers-slice";

const rootReducer = combineReducers({
    fetchUsers: fetchusersSliceReducer
})
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
})
export default store;