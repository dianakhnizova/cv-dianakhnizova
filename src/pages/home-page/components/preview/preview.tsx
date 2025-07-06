import styles from "./preview.module.css";
import { messages } from "./messages";
import classNames from "classnames";
import { Button } from "@/components/button/button";
import FrameIcon from "@/assets/Frame.png";
import { useNavigate } from "react-router-dom";
import { PagePath } from "@/router/enums";

interface Props {
  isLowHeight: boolean;
  isScrolled: boolean;
}

export const Preview = ({ isLowHeight, isScrolled }: Props) => {
  const navigate = useNavigate();

  const toDeploysPage = () => {
    void navigate(PagePath.deploysPage);
  };

  const toGitHubPage = () => {
    void navigate(PagePath.gitHubPage);
  };

  return (
    <div
      className={classNames(
        styles.container,
        isScrolled ? styles.shrink : isLowHeight ? styles.viewHeight : "",
      )}
    >
      <div className={styles.titleContainer}>
        <p className={styles.title}>{messages.mainTitle}</p>
        <p className={styles.descriptionTitle}>{messages.descriptionTitle}</p>
      </div>
      <div className={styles.previewContainer}>
        <div
          className={classNames(styles.projectContainer, styles.gitContainer)}
        >
          <p className={styles.projectTitle}>{messages.projectGitHubTitle}</p>
          <Button onClick={toGitHubPage} className={styles.previewButton}>
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
          <Button onClick={toDeploysPage} className={styles.previewButton}>
            <img src={FrameIcon} alt="frame-button" />
            {messages.buttonTitle}
          </Button>
        </div>
      </div>
    </div>
  );
};
