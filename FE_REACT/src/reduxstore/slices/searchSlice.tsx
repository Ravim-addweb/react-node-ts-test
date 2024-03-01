import { createSlice } from "@reduxjs/toolkit";

const initialState: any = ""

export const demoSlice = createSlice({
    name: 'demoSlice',
    initialState: { data : initialState },
    reducers: {
      editItem: (state, action) => {
        console.log(action.payload, "action.payload")
        state.data = action.payload
      }
    }
})

export const { editItem } = demoSlice.actions

export const demoReducer = demoSlice.reducer