import { Wrapper } from '@/components/wrapper/Wrapper';
import styles from './ContactPage.module.css';
import { Contacts } from '@/components/contacts/Contacts';

export const ContactPage = () => {
  return (
    <Wrapper>
      <div className={styles.container}>
        <Contacts />
      </div>
    </Wrapper>
  );
};
