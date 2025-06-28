import styles from "./main-title.module.css";
import { messages } from "./messages";

export const MainTitle = () => {
  return (
    <div className={styles.titleContainer}>
      <p className={styles.titleProf}>{messages.titleProfession}</p>
      <p className={styles.titleName}>{messages.titleName}</p>
      <p className={styles.titleDescription}>{messages.titleDescription}</p>
    </div>
  );
};
