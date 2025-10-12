import { Wrapper } from '@/components/wrapper/Wrapper';
import { ProjectCard } from '../home-page/components/preview/components/project-card/ProjectCard';
import { projectList } from '../home-page/components/preview/components/project-list/projectList';
import styles from './PortfolioPage.module.css';

export const PortfolioPage = () => {
  return (
    <Wrapper>
      <div className={styles.container}>
        <div className={styles.previewContainer}>
          {projectList.map(project => (
            <a
              key={project.title}
              href={project.link}
              className={styles.link}
              target="_blank
          "
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
      </div>
    </Wrapper>
  );
};
