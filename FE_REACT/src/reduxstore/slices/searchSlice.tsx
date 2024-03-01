import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const searchSlice = createSlice({
  name: "searchSlice",
  initialState: { data: initialState, searched: false },
  reducers: {
    searchText: (state, action) => {
      state.searched = true;
      state.data = action.payload.data;
    },
    searchStatus: (state) => {
      state.searched = false;
    },
  },
});

export const { searchText, searchStatus } = searchSlice.actions;

export const searchSliceReducer = searchSlice.reducer;
