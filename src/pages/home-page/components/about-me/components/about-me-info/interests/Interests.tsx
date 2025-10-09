import { interestList } from './interest-list/interests-list';
import styles from './Interests.module.css';
import { messages } from './messages';

export const Interests = () => {
  return (
    <>
      <p>{messages.title}</p>

      <div className={styles.container}>
        {interestList.map(interest => (
          <div className={styles.interest}>
            <img src={interest.image} className={styles.icon} />
            <p className={styles.title}>{interest.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};
