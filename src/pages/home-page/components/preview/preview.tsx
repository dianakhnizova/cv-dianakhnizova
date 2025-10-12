import { Button } from '@/components/button/Button';
import styles from './Preview.module.css';
import { ProjectCard } from './components/project-card/ProjectCard';
import { projectList } from './components/project-list/projectList';
import { messages } from './messages';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { PagePath } from '@/router/enums';

interface Props {
  isLowHeight: boolean;
  isScrolled: boolean;
}

export const Preview = ({ isLowHeight, isScrolled }: Props) => {
  const navigate = useNavigate();
  const previewProjects = projectList.slice(0, 3);

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
        {previewProjects.map(project => (
          <a
            key={project.title}
            href={project.link}
            className={styles.link}
            target="_blank"
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              language={project.language.map(lang => lang.title)}
              image={project.image}
            />
          </a>
        ))}
      </div>

      <Button onClick={() => void navigate(PagePath.portfolioPage)}>
        {messages.navigateButton}
      </Button>
    </div>
  );
};
