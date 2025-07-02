import styles from "./contact.module.css";
import { contactsList } from "@/components/contacts/contact-items-list/contact-list";

export const Contacts = () => {
  return (
    <div className={styles.contactContainer}>
      {contactsList.map((contact, index) => {
        return (
          <div key={index} className={styles.contact}>
            <p className={styles.label}>{contact.label}</p>
            <span className={styles.value}>{contact.data}</span>
          </div>
        );
      })}
    </div>
  );
};
