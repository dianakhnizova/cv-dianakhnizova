import { Button } from '@/components/button/Button';
import styles from './AboutMe.module.css';
import { messages } from './messages';
import ImageMe from '@/assets/me.jpg';
import type { JSX } from 'react';
import { MainTitle } from '../main-title/MainTitle';
import { useViewport } from '@/utils/hooks/use-viewport';
import { useScroll } from '@/utils/hooks/use-scroll';
import { SocialIcons } from '@/components/social-icons/SocialIcons';

interface Props {
  info: JSX.Element | null;
  onClick: () => void;
}

export const AboutMe = ({ info, onClick }: Props) => {
  const { isLowHeight } = useViewport();
  const { isScrolled } = useScroll();

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={ImageMe} alt="About me" className={styles.image} />
      </div>

      <div className={styles.titleContainer}>
        <MainTitle isLowHeight={isLowHeight} isScrolled={isScrolled} />

        <p className={styles.titleDescription}>{messages.titleDescription}</p>

        <SocialIcons />

        <Button onClick={onClick} className={styles.showButton}>
          {!info ? messages.showButton : messages.closeButton}
        </Button>
      </div>
    </div>
  );
};
