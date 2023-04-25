import { configureStore } from '@reduxjs/toolkit'
import { LC_NAMING, getInitialState } from './initialState'
import { userReducer } from './slices/userSlice'
import { filterReducer } from './slices/filterSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    filter: filterReducer,
  },
  preloadedState: getInitialState(),
})

store.subscribe(() => {
  localStorage.setItem(LC_NAMING, JSON.stringify(store.getState()))
})
