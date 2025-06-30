import styles from "./header.module.css";
import { Wrapper } from "@/components/wrapper/wrapper";
import { NavMenu } from "./nav-menu/nav-menu";
import { Logo } from "./logo/logo";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Wrapper className={styles.headerWrapper}>
        <div className={styles.container}>
          <Logo />
          <NavMenu />
        </div>
      </Wrapper>
    </header>
  );
};
