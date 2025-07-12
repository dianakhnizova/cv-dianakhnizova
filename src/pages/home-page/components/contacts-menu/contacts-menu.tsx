import { Button } from '@/components/button/button';
import styles from './contacts-menu.module.css';
import { messages } from './messages';
import DarkMeImg from '@/assets/dark-me-contact.png';
import LightMeImg from '@/assets/light-me-contact.png';
import type { JSX } from 'react';
import { useTheme } from '@/utils/hooks/use-theme';
import { Theme } from '@/sources/enums';

interface Props {
  isContent: JSX.Element | null;
  onClick: () => void;
}

export const ContactsMenu = ({ isContent, onClick }: Props) => {
  const { theme } = useTheme();
  const imageMe = theme === Theme.Dark ? DarkMeImg : LightMeImg;

  return (
    <div className={styles.container}>
      <div className={styles.contactContainer}>
        <p className={styles.title}>{messages.contactTitle}</p>
        <p className={styles.description}>{messages.descriptionTitle}</p>
        <Button onClick={onClick} className={styles.contactButton}>
          {!isContent ? messages.contactMeButton : messages.closeButton}
        </Button>
      </div>
      <div className={styles.imageContainer}>
        <img src={imageMe} alt="MyPhoto" className={styles.image} />
      </div>
    </div>
  );
};
