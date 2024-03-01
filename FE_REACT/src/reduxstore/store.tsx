import { configureStore } from "@reduxjs/toolkit";
import { searchSliceReducer } from "reduxstore/slices/searchSlice";

export const store = configureStore({
  reducer: {
    searchState: searchSliceReducer,
  },
});

export interface IReduxState {
  searchState: {
    data: string;
    searched: boolean;
  };
}
