import { Button } from '@/components/button/button';
import { messages } from './messages';
import { navMenuItemList } from './nav-menu-items/nav-menu-item-list';
import styles from './nav-menu.module.css';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { PagePath } from '@/router/enums';
import { useMobileMenuToggle } from '@/utils/hooks/use-mobile-menu-toggle';
import DarkBurger from '@/assets/dark-burger.svg';
import LightBurger from '@/assets/light-burger.svg';
import { useEffect, useState } from 'react';
import { useTheme } from '@/utils/hooks/use-theme';
import { Theme } from '@/sources/enums';

export const NavMenu = () => {
  const { isMobile, isMenuOpen, toggleMenu, closeMenu } = useMobileMenuToggle();
  const [selectedLink, setSelectedLink] = useState<string | null>(null);
  const { theme } = useTheme();

  const burgerImg = theme === Theme.Dark ? DarkBurger : LightBurger;

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentLink = navMenuItemList.find(
      link => location.pathname === link.to
    );

    if (currentLink) {
      setSelectedLink(currentLink.label);
      document.title = currentLink.label;
    } else if (location.pathname === PagePath.deploysPage) {
      setSelectedLink(messages.portfolioButton);
      document.title = messages.portfolioButton;
    }
  }, [location.pathname]);

  const handleLinkClick = (to: string, label: string) => () => {
    setSelectedLink(label);
    void navigate(to);
  };

  const toProtfolio = (label: string) => {
    void navigate(PagePath.deploysPage);
    setSelectedLink(label);
    document.title = label;
  };

  return (
    <>
      {isMenuOpen && <div className={styles.overlay} onClick={closeMenu} />}
      <Button className={styles.burgerMenu} onClick={toggleMenu}>
        <img src={burgerImg} alt="Burger Menu" width={24} height={24} />
      </Button>
      <nav
        className={classNames(styles.menu, {
          [styles.open]: isMobile && isMenuOpen,
        })}
      >
        {navMenuItemList.map(link => {
          return (
            <NavLink
              key={link.label}
              to={link.to}
              className={classNames(
                styles.menuItem,
                selectedLink === link.label ? styles.selectedLink : ''
              )}
              onClick={handleLinkClick(link.to, link.label)}
            >
              {link.label}
            </NavLink>
          );
        })}
        <Button
          isActive={selectedLink === messages.portfolioButton}
          onClick={() => toProtfolio(messages.portfolioButton)}
          className={classNames(
            styles.button,
            selectedLink ? styles.selectedButton : ''
          )}
        >
          {messages.portfolioButton}
        </Button>
      </nav>
    </>
  );
};
