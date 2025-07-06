import { Button } from "@/components/button/button";
import styles from "./contacts-menu.module.css";
import { messages } from "./messages";
import MyPhoto from "@/assets/myPhoto1.png";
import type { JSX } from "react";

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
        <Button onClick={onClick} className={styles.contactButton}>
          {!isContent ? messages.contactMeButton : messages.closeButton}
        </Button>
      </div>
      <div className={styles.imageContainer}>
        <img src={MyPhoto} alt="MyPhoto" className={styles.image} />
      </div>
    </div>
  );
};
