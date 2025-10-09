import { Wrapper } from '@/components/wrapper/Wrapper';
import { AboutMeInfo } from '../home-page/components/about-me/components/about-me-info/AboutMeInfo';
import styles from './AboutPage.module.css';

export const AboutPage = () => {
  return (
    <div className={styles.container}>
      <Wrapper className={styles.homeWrapper}>
        <AboutMeInfo />
      </Wrapper>
    </div>
  );
};
