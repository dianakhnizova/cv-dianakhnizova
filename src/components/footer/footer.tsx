import styles from './Footer.module.css';
import { Wrapper } from '../wrapper/Wrapper';
import { messages } from './messages';
import { PagesLinks } from '@/components/pages-links/PagesLinks';
import { SocialIcons } from '../social-icons/SocialIcons';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Wrapper className={styles.footerWrapper}>
        <div className={styles.container}>
          <PagesLinks />
        </div>

        <div className={styles.bottomContainer}>
          <p className={styles.bottomTitle}>{messages.bottomTitle}</p>

          <SocialIcons />
        </div>
      </Wrapper>
    </footer>
  );
};
