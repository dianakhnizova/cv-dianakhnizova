import { navMenuItemList } from "./nav-menu-items/nav-menu-item-list";
import styles from "./nav-menu.module.css";
import { NavLink } from "react-router-dom";

const handleLinkClick = (to: string) => () => {
  if (location.pathname === to) {
    globalThis.location.reload();
  }
};

export const NavMenu = () => {
  return (
    <ul className={styles.menu}>
      {navMenuItemList.map((link) => {
        return (
          <NavLink
            key={link.label}
            to={link.to}
            className={styles.menuItem}
            onClick={() => handleLinkClick(link.to)}
          >
            {link.label}
          </NavLink>
        );
      })}
    </ul>
  );
};
