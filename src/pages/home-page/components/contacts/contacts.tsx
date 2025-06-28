import { Button } from "@/components/button/button";
import styles from "./contacts.module.css";
import { messages } from "./messages";
import FrameIcon from "@/assets/Frame.png";
import MyPhoto from "@/assets/myPhoto1.png";

export const Contacts = () => {
  return (
    <div className={styles.container}>
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
