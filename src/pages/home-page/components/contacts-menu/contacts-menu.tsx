import { Button } from "@/components/button/button";
import styles from "./contacts-menu.module.css";
import { messages } from "./messages";
import FrameIcon from "@/assets/Frame.png";
import MyPhoto from "@/assets/myPhoto1.png";
import classNames from "classnames";

interface Props {
  isLowHeight: boolean;
  isScrolled: boolean;
}

export const ContactsMenu = ({ isLowHeight, isScrolled }: Props) => {
  return (
    <div
      className={classNames(
        styles.container,
        isScrolled ? styles.shrink : isLowHeight ? styles.viewHeight : "",
      )}
    >
      <div className={styles.contactContainer}>
        <p className={styles.title}>{messages.contactTitle}</p>
        <p className={styles.description}>{messages.descriptionTitle}</p>
        <Button className={styles.contactButton}>
          <img src={FrameIcon} alt="frame-button" />
          {messages.contactButton}
        </Button>
      </div>
      <div className={styles.imageContainer}>
        <img src={MyPhoto} alt="MyPhoto" className={styles.image} />
      </div>
    </div>
  );
};
