import styles from './Header.module.css';
import { Wrapper } from '@/components/wrapper/Wrapper';
import { NavMenu } from './nav-menu/NavMenu';
import { ThemeToggler } from './theme-toggler/ThemeToggler';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Wrapper className={styles.headerWrapper}>
        <div className={styles.container}>
          <ThemeToggler />
          <NavMenu />
        </div>
      </Wrapper>
    </header>
  );
};
