import { updateTheme, updateMode } from '../actions/themes';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  color: '#58249c',
  modeDark: true,
};

export const themeSlice = createReducer(initialState, (builder) => {
  builder
    .addCase(updateTheme, (state, { payload }) => ({
      ...state,
      color: payload,
    }))
    .addCase(updateMode, (state, { payload }) => ({
      ...state,
      modeDark: payload,
    }));
});
