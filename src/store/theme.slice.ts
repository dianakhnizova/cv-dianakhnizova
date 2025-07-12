import { Theme } from '@/sources/enums';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type ThemeType = Theme.Dark | Theme.Light;

interface ThemeState {
  theme: ThemeType;
}

const initialState: ThemeState = { theme: Theme.Dark };

export const themeSlice = createSlice({
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

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
