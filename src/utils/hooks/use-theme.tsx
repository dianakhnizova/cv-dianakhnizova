// src/hooks/useTheme.ts
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '@/store/store';
import { toggleTheme, setTheme } from '@/store/theme.slice';
import type { Theme } from '@/sources/enums';

export const useTheme = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch: AppDispatch = useDispatch();

  return {
    theme,
    setTheme: (value: Theme) => dispatch(setTheme(value)),
    toggleTheme: () => dispatch(toggleTheme()),
  };
};
