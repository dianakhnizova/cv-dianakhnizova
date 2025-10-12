import styles from './Certificates.module.css';
import JS from '@/assets/certificates/js.pdf';
import React from '@/assets/certificates/react.pdf';
import { messages } from './messages';

export const Certificates = () => {
  return (
    <div className={styles.container}>
      <p>{messages.title}</p>

      <div className={styles.certificates}>
        <a href={JS} download className={styles.link}>
          <span>{messages.javaScript}</span>
        </a>
        <a href={React} download className={styles.link}>
          <span>{messages.react}</span>
        </a>
      </div>
    </div>
  );
};
