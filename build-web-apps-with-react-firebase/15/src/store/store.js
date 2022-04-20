import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './reducers/user';

const store = configureStore({
  reducer: combineReducers({
    user: userReducer,
  }),
});

export const RootState = store.getState();
export default store;
