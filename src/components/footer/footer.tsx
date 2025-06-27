import styles from "./footer.module.css";
import { Wrapper } from "../wrapper/wrapper";
import { messages } from "./messages";
import InstaIcon from "@/assets/instagram.svg";
import GitHub from "@/assets/github.svg";
import Telegram from "@/assets/telegram.svg";
import LogoIcon from "@/assets/logo.jpg";
import { NavLink } from "react-router-dom";
import { pagesLinksList } from "./pages-links/pages-links-list";

const handleLinkClick = (to: string) => () => {
  if (location.pathname === to) {
    globalThis.location.reload();
  }
};

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Wrapper className={styles.footerWrapper}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <img src={LogoIcon} alt="logo" className={styles.logo} />
          </div>
          <div className={styles.pagesContainer}>
            <p className={styles.title}>{messages.pagesTitle}</p>
            <ul className={styles.pagesLinks}>
              {pagesLinksList.map((link) => {
                return (
                  <NavLink
                    key={link.label}
                    to={link.to}
                    className={styles.pageItem}
                    onClick={() => handleLinkClick(link.to)}
                  >
                    {link.label}
                  </NavLink>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={styles.container}>
          <p>{messages.bottomTitle}</p>
          <div className={styles.socialIconsContainer}>
            <img src={InstaIcon} alt="Instagram" className={styles.icon} />
            <img src={GitHub} alt="GitHub" className={styles.icon} />
            <img src={Telegram} alt="Telegram" className={styles.icon} />
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};
