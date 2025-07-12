import { Button } from '@/components/button/button';
import styles from './about-me.module.css';
import { messages } from './messages';
import DarkMeImg from '@/assets/dark-me.png';
import LightMeImg from '@/assets/light-me.png';
import type { JSX } from 'react';
import { useTheme } from '@/utils/hooks/use-theme';
import { Theme } from '@/sources/enums';

interface Props {
  info: JSX.Element | null;
  onClick: () => void;
}

export const AboutMe = ({ info, onClick }: Props) => {
  const { theme } = useTheme();

  const imageMe = theme === Theme.Dark ? DarkMeImg : LightMeImg;

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={imageMe} alt="About me" className={styles.image} />
      </div>
      <div className={styles.titleContainer}>
        <p className={styles.mainTitle}>{messages.mainTitle}</p>
        <p className={styles.titleDescription}>{messages.titleDescription}</p>
        <Button onClick={onClick} className={styles.showButton}>
          {!info ? messages.showButton : messages.closeButton}
        </Button>
      </div>
    </div>
  );
};
