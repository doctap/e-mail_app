import { configureStore } from '@reduxjs/toolkit';
import replaceMessageSlice from '../reducers/ReplaceMessageSlice';

export const store = configureStore({
  reducer: {
	replaceMessageSlice,
  },
});
 
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;