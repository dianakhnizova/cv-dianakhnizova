import { Button } from "@/components/button/button";
import styles from "./contacts-menu.module.css";
import { messages } from "./messages";
import FrameIcon from "@/assets/Frame.png";
import MyPhoto from "@/assets/myPhoto1.png";
import classNames from "classnames";
import type { JSX } from "react";

interface Props {
  isScrolled: boolean;
  isContent: JSX.Element | null;
  onClick: () => void;
}

export const ContactsMenu = ({ isScrolled, isContent, onClick }: Props) => {
  return (
    <div
      className={classNames(styles.container, isScrolled ? styles.shrink : "")}
    >
      <div className={styles.contactContainer}>
        <p className={styles.title}>{messages.contactTitle}</p>
        <p className={styles.description}>{messages.descriptionTitle}</p>
        <Button onClick={onClick} className={styles.contactButton}>
          <img src={FrameIcon} alt="frame-button" />
          {!isContent ? messages.contactMeButton : messages.closeButton}
        </Button>
      </div>
      <div className={styles.imageContainer}>
        <img src={MyPhoto} alt="MyPhoto" className={styles.image} />
      </div>
    </div>
  );
};
