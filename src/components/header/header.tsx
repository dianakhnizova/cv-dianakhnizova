import styles from "./header.module.css";
import { Wrapper } from "@/components/wrapper/wrapper";
import { NavMenu } from "./nav-menu/nav-menu";
import { Logo } from "./logo/logo";
import { useMobileMenuToggle } from "@/utils/hooks/use-mobile-menu-toggle";

export const Header = () => {
  const { isMobile, toggleMenu, isMenuOpen, menuRef } = useMobileMenuToggle();

  return (
    <header className={styles.header}>
      <Wrapper className={styles.headerWrapper}>
        <div className={styles.container}>
          <Logo isMobile={isMobile} onClick={toggleMenu} />
          <NavMenu
            isMobile={isMobile}
            isMenuOpen={isMenuOpen}
            menuRef={menuRef}
          />
        </div>
      </Wrapper>
    </header>
  );
};
