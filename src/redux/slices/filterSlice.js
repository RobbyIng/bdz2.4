import { createSlice } from "@reduxjs/toolkit";
import { myInitialState } from "../initialState";


export const filterSlice = createSlice({
  name: 'filter',
  initialState: myInitialState.filter,
  reducers: {
    changeSearchValue(state, action) {
      state.search = action.payload
    }
  }
})

export const { changeSearchValue } = filterSlice.actions
export const filterReducer = filterSlice.reducer;
