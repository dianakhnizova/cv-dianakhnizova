import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from './slices/theme/theme.slice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export type TypeRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
