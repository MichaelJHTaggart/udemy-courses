import { createAction } from '@reduxjs/toolkit';

export const signUpUser = createAction('SIGN_UP_USER')
export const loginUser = createAction('LOGIN');
export const logoutUser = createAction('LOGOUT');
export const authIsReady = createAction('AUTH_IS_READY')