import styles from "./git-hub-title.module.css";
import { messages } from "./messages";
import type { UserData } from "../../types";

interface Props {
  user: UserData | null;
}

export const GitHubTitle = ({ user }: Props) => {
  return (
    <div className={styles.titleContainer}>
      <p>{messages.gitHubNameTitle}</p>
      {user && (
        <p key={user.id} className={styles.name}>
          {user.login}
        </p>
      )}
      <p>{messages.gitHubUrlTitle}</p>
      {user && (
        <a href={user.html_url} target="_blank" className={styles.link}>
          {user.html_url}
        </a>
      )}
    </div>
  );
};
