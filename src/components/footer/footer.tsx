import styles from "./footer.module.css";
import { Wrapper } from "../wrapper/wrapper";
import { messages } from "./messages";
import { PagesLinks } from "@/components/pages-links/pages-links";
import { Logo } from "../logo/logo";
import { SocialIcons } from "../social-icons/social-icons";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Wrapper className={styles.footerWrapper}>
        <div className={styles.container}>
          <Logo />
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
