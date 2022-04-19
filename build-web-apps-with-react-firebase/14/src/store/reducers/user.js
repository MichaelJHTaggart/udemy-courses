import {
  authIsReady,
  loginUser,
  logoutUser,
  signUpUser,
} from '../actions/user';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  authReady: false,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(signUpUser, (state, { payload }) => ({
      ...state,
      user: payload,
    }))
    .addCase(loginUser, (state, { payload }) => ({
      ...state,
      user: payload,
    }))
    .addCase(logoutUser, (state) => ({
      ...state,
      user: null,
    }))
    .addCase(authIsReady, (state, { payload }) => ({
      ...state,
      user: payload,
      authReady: true,
    }));
});
