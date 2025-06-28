import styles from "./preview.module.css";
import { messages } from "./messages";
import classNames from "classnames";
import { Button } from "@/components/button/button";
import FrameIcon from "@/assets/Frame.png";

export const Preview = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>{messages.mainTitle}</p>
        <p className={styles.descriptionTitle}>{messages.descriptionTitle}</p>
      </div>
      <div className={styles.previewContainer}>
        <div
          className={classNames(styles.projectContainer, styles.gitContainer)}
        >
          <p className={styles.projectTitle}>{messages.projectGitHubTitle}</p>
          <Button className={styles.previewButton}>
            <img src={FrameIcon} alt="frame-button" />
            {messages.buttonTitle}
          </Button>
        </div>
        <div
          className={classNames(
            styles.projectContainer,
            styles.deployContainer,
          )}
        >
          <p className={styles.projectTitle}>{messages.deploysTitle}</p>
          <Button className={styles.previewButton}>
            <img src={FrameIcon} alt="frame-button" />
            {messages.buttonTitle}
          </Button>
        </div>
      </div>
    </div>
  );
};
