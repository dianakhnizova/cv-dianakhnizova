import { Button } from "@/components/button/button";
import { SkillItem } from "./components/skill-item/skill-item";
import { messages } from "./messages";
import styles from "./skills.module.css";
import type { JSX } from "react";
import { useState } from "react";
import FrameIcon from "@/assets/Frame.png";

export const Skills = () => {
  const [skills, setSkills] = useState<JSX.Element | null>(null);

  const skillsBlock = <SkillItem />;

  const handleSHowSkills = () => {
    if (skills) {
      setSkills(null);
    } else {
      setSkills(skillsBlock);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={styles.mainTitle}>{messages.titleMain}</p>
        <p className={styles.title}>{messages.titleDescription}</p>
      </div>
      <div className={styles.skillsContainer}>
        <Button onClick={handleSHowSkills} className={styles.showButton}>
          <img src={FrameIcon} alt="frame-button" />

          {!skills ? messages.showButton : messages.closeButton}
        </Button>
        {skills}
      </div>
    </div>
  );
};
