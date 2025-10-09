import { Theme } from '@/sources/enums';
import type { ThemeType } from '@/sources/types';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  theme: ThemeType;
}

const initialState: ThemeState = { theme: Theme.Dark };

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeType>) {
      state.theme = action.payload;
    },
    toggleTheme(state) {
      state.theme = state.theme === Theme.Dark ? Theme.Light : Theme.Dark;
    },
  },
});

export const themeActions = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
