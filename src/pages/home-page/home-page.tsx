import { Wrapper } from "@/components/wrapper/wrapper";
import styles from "./home-page.module.css";
import { Preview } from "./components/preview/preview";
import { ContactsMenu } from "./components/contacts-menu/contacts-menu";
import { MainTitle } from "./components/main-title/main-title";
import { useViewport } from "@/utils/hooks/use-viewport";
import { useScroll } from "@/utils/hooks/use-scroll";
import { Skills } from "./components/skills/skills";
import type { JSX } from "react";
import { useState } from "react";
import { AboutMe } from "./components/about-me/about-me";
import { StackMenu } from "./components/ stack-menu/stack-menu";
import { ContactMeForm } from "@/components/contact-me-form/contact-me-form";

export const HomePage = () => {
  const { isLowHeight } = useViewport();
  const { isScrolled } = useScroll();
  const contactsBlock = <ContactMeForm />;

  const [contactsContent, setContactsContent] = useState<JSX.Element | null>(
    null,
  );

  const handleContactClick = () => {
    if (!contactsContent) {
      setContactsContent(contactsBlock);
    } else {
      setContactsContent(null);
    }
  };

  return (
    <div className={styles.container}>
      <Wrapper className={styles.homeWrapper}>
        <MainTitle isLowHeight={isLowHeight} isScrolled={isScrolled} />
        <AboutMe />
        <Preview isLowHeight={isLowHeight} isScrolled={isScrolled} />
        <ContactsMenu
          isScrolled={isScrolled}
          isContent={contactsContent}
          onClick={handleContactClick}
        />
        {contactsContent}
        <Skills />
        <StackMenu />
      </Wrapper>
    </div>
  );
};
