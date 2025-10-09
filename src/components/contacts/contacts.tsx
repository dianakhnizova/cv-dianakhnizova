import styles from './Contact.module.css';
import { contactsList } from '@/components/contacts/contact-items-list/ContactList';

export const Contacts = () => {
  return (
    <div className={styles.contactContainer}>
      {contactsList.map((contact, index) => {
        return (
          <div key={index} className={styles.contact}>
            <p className={styles.label}>{contact.label}</p>
            <a
              href={contact.data}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.value}
            >
              {contact.name}
            </a>
          </div>
        );
      })}
    </div>
  );
};
