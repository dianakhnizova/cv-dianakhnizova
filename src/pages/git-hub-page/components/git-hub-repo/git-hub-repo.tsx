import type { UserReposData } from "../../types";
import styles from "./git-hub-repo.module.css";

interface Props {
  repos: UserReposData[];
}

export const GitHubRepo = ({ repos }: Props) => {
  return (
    <ul className={styles.repoList}>
      {repos.map((repo) => (
        <li key={repo.id} className={styles.repoItem}>
          <a href={repo.html_url} target="_blank" className={styles.link}>
            {repo.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
