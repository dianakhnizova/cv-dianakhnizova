import styles from "./pages-links.module.css";
import { messages } from "./messages";
import { pagesLinksList } from "./pages-links-list";
import { NavLink } from "react-router-dom";

const handleLinkClick = (to: string) => () => {
  if (location.pathname === to) {
    globalThis.location.reload();
  }
};

export const PagesLinks = () => {
  return (
    <div className={styles.pagesContainer}>
      <p className={styles.title}>{messages.pagestitle}</p>
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
  );
};
