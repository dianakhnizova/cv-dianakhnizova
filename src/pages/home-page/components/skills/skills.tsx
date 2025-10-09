import { Button } from '@/components/button/Button';
import { SkillItem } from './components/skill-item/SkillItem';
import { messages } from './messages';
import styles from './Skills.module.css';
import type { JSX } from 'react';
import { useState } from 'react';
import { ButtonVariants } from '@/components/button/enums';

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
    <>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <p className={styles.mainTitle}>{messages.titleMain}</p>
          <p className={styles.title}>{messages.titleDescription}</p>
        </div>

        <Button
          variant={ButtonVariants.secondary}
          onClick={handleSHowSkills}
          className={styles.showButton}
        >
          {!skills ? messages.showButton : messages.closeButton}
        </Button>
      </div>

      <div className={styles.skillsContainer}>{skills}</div>
    </>
  );
};
