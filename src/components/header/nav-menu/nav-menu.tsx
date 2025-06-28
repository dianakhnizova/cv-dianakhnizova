import { Button } from "@/components/button/button";
import { messages } from "./messages";
import { navMenuItemList } from "./nav-menu-items/nav-menu-item-list";
import styles from "./nav-menu.module.css";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

interface Props {
  isMobile: boolean;
  isMenuOpen: boolean;
  menuRef: React.RefObject<HTMLUListElement | null>;
}

const handleLinkClick = (to: string) => () => {
  if (location.pathname === to) {
    globalThis.location.reload();
  }
};

export const NavMenu = ({ isMobile, isMenuOpen, menuRef }: Props) => {
  return (
    <ul
      ref={menuRef}
      className={classNames(styles.menu, {
        [styles.menuMobile]: isMobile,
        [styles.open]: isMobile && isMenuOpen,
      })}
    >
      {navMenuItemList.map((link) => {
        return (
          <NavLink
            key={link.label}
            to={link.to}
            className={styles.menuItem}
            onClick={() => {
              handleLinkClick(link.to);
            }}
          >
            {link.label}
          </NavLink>
        );
      })}
      <Button className={styles.button}>{messages.portfolioButton}</Button>
    </ul>
  );
};
