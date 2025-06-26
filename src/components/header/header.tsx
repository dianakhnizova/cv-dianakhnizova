import styles from "./header.module.css";
import { Wrapper } from "@/components/wrapper/wrapper";
import { NavMenu } from "./nav-menu/nav-menu";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Wrapper>
        <NavMenu />
      </Wrapper>
    </header>
  );
};
