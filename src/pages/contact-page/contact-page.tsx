import styles from "./contact-page.module.css";
import { messages } from "../../pages/contact-page/messages";
import { Contacts } from "@/components/contacts/contacts";

export const ContactPage = () => {
  return (
    <div className={styles.container}>
      <p>{messages.mainTitle}</p>
      <Contacts />
    </div>
  );
};
