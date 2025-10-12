import { messages } from './messages';
import styles from './StackMenu.module.css';
import { Button } from '@/components/button/Button';
import type { JSX } from 'react';
import { useState } from 'react';
import { TechStack } from './components/tech-stack/TechStack';
import { Certificates } from '@/components/certificates/Certificates';

export const StackMenu = () => {
  const certificatesBlock = <Certificates />;
  const techStackBlock = <TechStack />;

  const [stackContent, setStackContent] = useState<JSX.Element | null>(null);
  const [activeButton, setActiveButton] = useState<
    'certificates' | 'tech-stack' | null
  >(null);

  const toggleStackContent = (type: 'certificates' | 'tech-stack' | null) => {
    if (activeButton === type) {
      setStackContent(null);
      setActiveButton(null);
    } else {
      setStackContent(
        type === 'certificates' ? certificatesBlock : techStackBlock
      );
      setActiveButton(type);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <Button
          isActive={activeButton === 'certificates'}
          onClick={() => toggleStackContent('certificates')}
          className={styles.stackButton}
        >
          {messages.certificateButton}
        </Button>

        <Button
          isActive={activeButton === 'tech-stack'}
          onClick={() => toggleStackContent('tech-stack')}
          className={styles.stackButton}
        >
          {messages.techStackButton}
        </Button>
      </div>

      {stackContent && (
        <div className={styles.stackContainer}>{stackContent}</div>
      )}
    </div>
  );
};
