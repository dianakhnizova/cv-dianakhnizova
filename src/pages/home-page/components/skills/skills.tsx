import { SkillItem } from "./components/skill-item/skill-item";
import { messages } from "./messages";
import styles from "./skills.module.css";

export const Skills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>{messages.mainTitle}</p>
      </div>
      <SkillItem />
    </div>
  );
};
