import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { themeSlice } from './reducers/ThemeContextSlice';

const store = configureStore({
  reducer: combineReducers({
    theme: themeSlice,
  }),
});
export const RootState = store.getState();
export default store;
