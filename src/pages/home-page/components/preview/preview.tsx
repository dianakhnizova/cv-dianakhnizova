import styles from './Preview.module.css';
import { ProjectCard } from './components/project-card/ProjectCard';
import { projectList } from './components/project-list/projectList';
import { messages } from './messages';
import classNames from 'classnames';

interface Props {
  isLowHeight: boolean;
  isScrolled: boolean;
}

export const Preview = ({ isLowHeight, isScrolled }: Props) => {
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
        {projectList.map(project => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            language={project.language.map(lang => lang.title)}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
};
