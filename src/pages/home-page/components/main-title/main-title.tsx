import classNames from "classnames";
import styles from "./main-title.module.css";
import { messages } from "./messages";

interface Props {
  isLowHeight: boolean;
  isScrolled: boolean;
}

export const MainTitle = ({ isLowHeight, isScrolled }: Props) => {
  return (
    <div
      className={classNames(
        styles.container,
        isScrolled ? styles.shrink : isLowHeight ? styles.viewHeight : "",
      )}
    >
      <div className={styles.titleContainer}>
        <p className={styles.titleProf}>{messages.titleProfession}</p>
        <p className={styles.titleName}>{messages.titleName}</p>
        <p className={styles.titleDescription}>{messages.titleDescription}</p>
      </div>
    </div>
  );
};
