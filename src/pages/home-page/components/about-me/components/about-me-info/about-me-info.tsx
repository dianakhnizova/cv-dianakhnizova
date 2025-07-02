import styles from "./about-me-info.module.css";
import { AboutMeDataList } from "./about-me-list/about-me-list";
import { Button } from "@/components/button/button";
import { messages } from "../../messages";

export const AboutMeInfo = () => {
  return (
    <div className={styles.aboutMeContainer}>
      {AboutMeDataList.map((data, index) => {
        return (
          <div key={index} className={styles.dataContainer}>
            <p className={styles.label}>{data.label}</p>
            <p className={styles.data}>{data.data}</p>
          </div>
        );
      })}
      <Button className={styles.downloadButton}>
        {messages.downloadButton}
      </Button>
    </div>
  );
};
