import { createSlice } from "@reduxjs/toolkit";
import { LC_NAMING, myInitialState } from "../initialState";

const userSlice = createSlice({
  name: 'user',
  initialState: myInitialState.user,
  reducers: {
    setUpUser: (_, action) => {
      return action.payload
    },
    cleanUser: () => {
      localStorage.removeItem(LC_NAMING)
      return myInitialState.user
    }
  }
})

export const { setUpUser, cleanUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
