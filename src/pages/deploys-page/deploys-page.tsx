import { ProjectCardList } from '@/components/project-card-list/ProjectCardList';
import styles from './deploys-page.module.css';

export const DeploysPage = () => {
  return (
    <div className={styles.container}>
      <ProjectCardList />
    </div>
  );
};
