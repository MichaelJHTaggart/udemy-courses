import { loginUser, logoutUser } from '../actions/user';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loginUser, (state, {payload}) => ({
    ...state,
    user: payload,
  }))
    .addCase(logoutUser, (state) => ({
      ...state,
      user: null
    }));
});
