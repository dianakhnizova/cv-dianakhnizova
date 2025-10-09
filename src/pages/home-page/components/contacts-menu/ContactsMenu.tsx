import { Button } from '@/components/button/Button';
import styles from './ContactsMenu.module.css';
import { messages } from './messages';
import type { JSX } from 'react';
import { ButtonVariants } from '@/components/button/enums';

interface Props {
  isContent: JSX.Element | null;
  onClick: () => void;
}

export const ContactsMenu = ({ isContent, onClick }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.contactContainer}>
        <p className={styles.title}>{messages.contactTitle}</p>
        <p className={styles.description}>{messages.descriptionTitle}</p>

        <Button variant={ButtonVariants.secondary} onClick={onClick}>
          {!isContent ? messages.contactMeButton : messages.closeButton}
        </Button>
      </div>
    </div>
  );
};
