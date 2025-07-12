import styles from './preview.module.css';
import { messages } from './messages';
import classNames from 'classnames';
import { Button } from '@/components/button/button';
import { useNavigate } from 'react-router-dom';
import { PagePath } from '@/router/enums';
import { useTheme } from '@/utils/hooks/use-theme';
import { Theme } from '@/sources/enums';
import DarkDeployImg from '@/assets/deploy-dark.svg';
import LightDeployImg from '@/assets/deploy-light.svg';
import DarkGitImg from '@/assets/github-dark.svg';
import LightGitImg from '@/assets/github-light.svg';

interface Props {
  isLowHeight: boolean;
  isScrolled: boolean;
}

export const Preview = ({ isLowHeight, isScrolled }: Props) => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const imageDeploy = theme === Theme.Dark ? DarkDeployImg : LightDeployImg;
  const imageGit = theme === Theme.Dark ? DarkGitImg : LightGitImg;
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
        isScrolled ? styles.shrink : isLowHeight ? styles.viewHeight : ''
      )}
    >
      <div className={styles.titleContainer}>
        <p className={styles.title}>{messages.mainTitle}</p>
        <p className={styles.descriptionTitle}>{messages.descriptionTitle}</p>
      </div>
      <div className={styles.previewContainer}>
        <div className={styles.projectContainer}>
          <img src={imageDeploy} alt="Deploy" className={styles.image} />
          <p className={styles.projectTitle}>{messages.projectGitHubTitle}</p>
          <Button onClick={toGitHubPage}>{messages.buttonTitle}</Button>
        </div>

        <div className={styles.projectContainer}>
          <img src={imageGit} alt="Git" className={styles.image} />
          <p className={styles.projectTitle}>{messages.deploysTitle}</p>
          <Button onClick={toDeploysPage}>{messages.buttonTitle}</Button>
        </div>
      </div>
    </div>
  );
};
