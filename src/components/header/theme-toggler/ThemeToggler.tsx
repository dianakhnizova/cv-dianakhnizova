import styles from './ThemeToggler.module.css';
import { ToggleThemes } from '@/components/toggle-themes/ToggleThemes';
import { useTheme } from '@/utils/hooks/use-theme';

export const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.container}>
      <ToggleThemes theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
};
