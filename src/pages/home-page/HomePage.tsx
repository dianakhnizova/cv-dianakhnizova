import { Wrapper } from '@/components/wrapper/Wrapper';
import styles from './HomePage.module.css';
import { ContactsMenu } from './components/contacts-menu/ContactsMenu';
import { useViewport } from '@/utils/hooks/use-viewport';
import { useScroll } from '@/utils/hooks/use-scroll';
import type { JSX } from 'react';
import { useState } from 'react';
import { AboutMe } from './components/about-me/AboutMe';
import { StackMenu } from './components/stack-menu/StackMenu';
import { ContactMeForm } from '@/components/contact-me-form/ContactMeForm';
import { AboutMeInfo } from './components/about-me/components/about-me-info/AboutMeInfo';
import { Skills } from './components/skills/Skills';
import { Preview } from './components/preview/Preview';

export const HomePage = () => {
  const { isLowHeight } = useViewport();
  const { isScrolled } = useScroll();
  const [contactsContent, setContactsContent] = useState<JSX.Element | null>(
    null
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
      <AboutMe info={info} onClick={handleInfoShow} />

      <Wrapper className={styles.homeWrapper}>
        {info}

        <Skills />

        <Preview isLowHeight={isLowHeight} isScrolled={isScrolled} />

        <ContactsMenu
          isContent={contactsContent}
          onClick={handleContactClick}
        />

        {contactsContent}

        <StackMenu />
      </Wrapper>
    </div>
  );
};
