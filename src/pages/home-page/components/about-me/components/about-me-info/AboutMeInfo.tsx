import styles from './AboutMeInfo.module.css';
import { AboutMeDataList } from './about-me-list/about-me-list';
import { Button } from '@/components/button/Button';
import { messages } from '../../messages';
import { Interests } from './interests/Interests';
import Cv from '@/assets/cv.pdf';

export const AboutMeInfo = () => {
  return (
    <div className={styles.aboutMeContainer}>
      <div className={styles.biography}>
        {AboutMeDataList.map((data, index) => {
          return (
            <div key={index} className={styles.dataContainer}>
              <p className={styles.label}>{data.label}</p>
              <p className={styles.data}>{data.data}</p>
            </div>
          );
        })}
      </div>

      <div className={styles.info}>
        <Interests />

        <a href={Cv} download>
          <Button>{messages.downloadButton}</Button>
        </a>
      </div>
    </div>
  );
};
