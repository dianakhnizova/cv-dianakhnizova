import { Button } from "@/components/button/button";
import styles from "./about-me.module.css";
import { messages } from "./messages";
import AboutMeImg from "@/assets/about-me.png";
import type { JSX } from "react";
import { useState } from "react";
import { AboutMeInfo } from "./components/about-me-info/about-me-info";
import FrameIcon from "@/assets/Frame.png";

export const AboutMe = () => {
  const [info, setInfo] = useState<JSX.Element | null>(null);
  const infoBlock = <AboutMeInfo />;

  const handleInfoShow = () => {
    if (info) {
      setInfo(null);
    } else {
      setInfo(infoBlock);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={AboutMeImg} alt="About me" className={styles.image} />
      </div>
      <div className={styles.titleContainer}>
        <p className={styles.mainTitle}>{messages.mainTitle}</p>
        <p className={styles.titleDescription}>{messages.titleDescription}</p>
        <div className={styles.infoContainer}>
          <Button onClick={handleInfoShow} className={styles.showButton}>
            <img src={FrameIcon} alt="frame-button" />
            {!info ? messages.showButton : messages.closeButton}
          </Button>
          {info}
        </div>
      </div>
    </div>
  );
};
