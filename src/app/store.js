import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import coinResultReducer from './coinResultSlice';
import doorResultReducer from './doorResultSlice';
import numberResultReducer from './numberResultSlice';
import gameResultReducer from './gameResultSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    coinResult: coinResultReducer,
    doorResult: doorResultReducer,
    numberResult: numberResultReducer,
    gameResult: gameResultReducer,
  },
});
