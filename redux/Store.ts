import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import generalReducer from './general'

export const store = configureStore({
    reducer: { generalReducer },
    middleware: getDefaultMiddleware({
        serializableCheck: false
    }),
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
