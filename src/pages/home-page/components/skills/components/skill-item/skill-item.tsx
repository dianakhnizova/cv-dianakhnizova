import styles from "./skill-item.module.css";
import { skillItemsList } from "./skill-items-list/skill-items-list";

export const SkillItem = () => {
  return (
    <div className={styles.skillsContainer}>
      {skillItemsList.map((skillItem, index) => {
        return (
          <div key={index} className={styles.skillItemContainer}>
            <p className={styles.label}>{skillItem.label}</p>
            <div className={styles.skills}>
              <span className={styles.skill}>
                {skillItem.skills.map((skill) => skill.skill).join(", ")}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
