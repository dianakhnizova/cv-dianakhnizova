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
import { StackMenu } from "./components/stack-menu/stack-menu";
import { ContactMeForm } from "@/components/contact-me-form/contact-me-form";
import { AboutMeInfo } from "./components/about-me/components/about-me-info/about-me-info";

export const HomePage = () => {
  const { isLowHeight } = useViewport();
  const { isScrolled } = useScroll();
  const [contactsContent, setContactsContent] = useState<JSX.Element | null>(
    null,
  );
  const [info, setInfo] = useState<JSX.Element | null>(null);
  const contactsBlock = <ContactMeForm />;
  const infoBlock = <AboutMeInfo />;

  const handleInfoShow = () => {
    if (info) {
      setInfo(null);
    } else {
      setInfo(infoBlock);
    }
  };

  const handleContactClick = () => {
    if (!contactsContent) {
      setContactsContent(contactsBlock);
    } else {
      setContactsContent(null);
    }
  };

  return (
    <div className={styles.container}>
      <MainTitle isLowHeight={isLowHeight} isScrolled={isScrolled} />

      <Wrapper className={styles.homeWrapper}>
        <AboutMe info={info} onClick={handleInfoShow} />
        {info}
        <Preview isLowHeight={isLowHeight} isScrolled={isScrolled} />
        <ContactsMenu
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
