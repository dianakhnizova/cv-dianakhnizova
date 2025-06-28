import { Wrapper } from "@/components/wrapper/wrapper";
import styles from "./home-page.module.css";
import { Preview } from "./components/preview/preview";
import { Contacts } from "./components/contacts/contacts";
import { MainTitle } from "./components/main-title/main-title";
import { useScroll } from "@/utils/hooks/use-scroll";
import { RandomProject } from "@/components/random-projects/random-projects";
import { TechStack } from "./components/tech-stack/tech-stack";

export const HomePage = () => {
  const { isScrolled } = useScroll();

  return (
    <div className={styles.container}>
      <Wrapper className={styles.homeWrapper}>
        <MainTitle isScrolled={isScrolled} />
        <Preview isScrolled={isScrolled} />
        <Contacts isScrolled={isScrolled} />
        <RandomProject />
        <TechStack />
      </Wrapper>
    </div>
  );
};
