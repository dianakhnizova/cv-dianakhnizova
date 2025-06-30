import { Button } from "@/components/button/button";
import { messages } from "./messages";
import { navMenuItemList } from "./nav-menu-items/nav-menu-item-list";
import styles from "./nav-menu.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { PagePath } from "@/router/enums";
import { useMobileMenuToggle } from "@/utils/hooks/use-mobile-menu-toggle";
import Burger from "@/assets/burger.svg";

const handleLinkClick = (to: string) => () => {
  if (location.pathname === to) {
    globalThis.location.reload();
  }
};

export const NavMenu = () => {
  const { isMobile, isMenuOpen, toggleMenu, closeMenu } = useMobileMenuToggle();
  const navigate = useNavigate();

  const toProtfolio = () => {
    void navigate(PagePath.deploysPage);
  };

  return (
    <>
      {isMenuOpen && <div className={styles.overlay} onClick={closeMenu} />}
      <Button className={styles.burgerMenu} onClick={toggleMenu}>
        <img src={Burger} alt="Burger Menu" width={24} height={24} />
      </Button>
      <nav
        className={classNames(styles.menu, {
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
        <Button onClick={toProtfolio} className={styles.button}>
          {messages.portfolioButton}
        </Button>
      </nav>
    </>
  );
};
