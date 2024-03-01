import { configureStore } from "@reduxjs/toolkit";
import { demoReducer } from 'reduxstore/slices/searchSlice'

export const store = configureStore({
    reducer: {
        demoState: demoReducer,
    },
})