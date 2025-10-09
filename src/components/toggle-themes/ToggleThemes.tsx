import styles from './ToggleThemes.module.css';
import ToggleDark from '@/assets/theme-light.svg';
import ToggleLight from '@/assets/theme.svg';
import { Theme } from '@/sources/enums';

interface Props {
  theme: string;
  toggleTheme: () => void;
}

export const ToggleThemes = ({ theme, toggleTheme }: Props) => {
  return (
    <>
      {theme === Theme.Dark ? (
        <img
          src={ToggleDark}
          alt="Toggle-Themes"
          className={styles.toggleThemesButton}
          onClick={toggleTheme}
        />
      ) : (
        <img
          src={ToggleLight}
          alt="Toggle-Themes"
          className={styles.toggleThemesButton}
          onClick={toggleTheme}
        />
      )}
    </>
  );
};
