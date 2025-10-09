import type { FC } from 'react';
import styles from './ProjectCard.module.css';

interface Props {
  title: string;
  description: string;
  image: string;
  language: string;
}

export const ProjectCard: FC<Props> = ({
  title,
  description,
  language,
  image,
}) => {
  return (
    <div className={styles.project}>
      <div className={styles.projectInfo}>
        <p className={styles.titleProject}>{title}</p>
        <p className={styles.description}>{description}</p>

        <div className={styles.techStack}>
          <p className={styles.stack}>{language}</p>
          <p className={styles.stack}>TypeScript</p>
        </div>
      </div>

      <div className={styles.projectImage}>
        <img src={image} alt="Project" className={styles.image} />
      </div>
    </div>
  );
};
