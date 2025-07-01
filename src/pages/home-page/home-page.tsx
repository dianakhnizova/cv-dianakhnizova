import { Wrapper } from "@/components/wrapper/wrapper";
import styles from "./home-page.module.css";
import { Preview } from "./components/preview/preview";
import { ContactsMenu } from "./components/contacts-menu/contacts-menu";
import { MainTitle } from "./components/main-title/main-title";
import { RandomProject } from "@/components/random-projects/random-projects";
import { TechStack } from "./components/tech-stack/tech-stack";
import { useViewport } from "@/utils/hooks/use-viewport";
import { useScroll } from "@/utils/hooks/use-scroll";
import { Contacts } from "@/components/contacts/contacts";
import { Skills } from "./components/skills/skills";

export const HomePage = () => {
  const { isLowHeight } = useViewport();
  const { isScrolled } = useScroll();

  return (
    <div className={styles.container}>
      <Wrapper className={styles.homeWrapper}>
        <MainTitle isLowHeight={isLowHeight} isScrolled={isScrolled} />
        <Preview isLowHeight={isLowHeight} isScrolled={isScrolled} />
        <ContactsMenu isLowHeight={isLowHeight} isScrolled={isScrolled} />
        <RandomProject isScrolled={isScrolled} />
        <Skills />
        <TechStack />
        <Contacts />
      </Wrapper>
    </div>
  );
};
