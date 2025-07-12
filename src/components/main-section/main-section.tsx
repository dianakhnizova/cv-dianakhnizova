import { Outlet } from 'react-router-dom';
import styles from './main-section.module.css';
import { useEffect } from 'react';
import { useTheme } from '@/utils/hooks/use-theme';
export const MainSection = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <main className={styles.section}>
      <Outlet />
    </main>
  );
};
