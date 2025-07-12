import styles from './logo.module.css';
import { ToggleThemes } from '@/components/toggle-themes/toggle-themes';
import { useTheme } from '@/utils/hooks/use-theme';

export const Logo = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.container}>
      <ToggleThemes theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
};
