import { createSlice } from "@reduxjs/toolkit";

const initialState: any = ""

export const demoSlice:any = createSlice({
    name: 'searchSlice',
    initialState: { data : initialState, searched: false },
    reducers: {
      searchText: (state, action) => {
        state.searched = true
        state.data = action.payload.data
      },
      searchStatus: (state, action) => {
        state.searched = false
      }
    }
})

export const { searchText, searchStatus } = demoSlice.actions

export const demoReducer = demoSlice.reducer