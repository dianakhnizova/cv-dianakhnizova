import type { Theme } from '@/sources/enums';
import { useActions } from './use-actions';
import { useSelector } from 'react-redux';
import { selectTheme } from '@/store/slices/theme/selectors';

export const useTheme = () => {
  const theme = useSelector(selectTheme);
  const { setTheme, toggleTheme } = useActions();

  return {
    theme,
    setTheme: (value: Theme) => setTheme(value),
    toggleTheme: () => toggleTheme(),
  };
};
