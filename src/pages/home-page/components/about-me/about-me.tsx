import { Button } from "@/components/button/button";
import styles from "./about-me.module.css";
import { messages } from "./messages";
import AboutMeImg from "@/assets/about-me.png";
import type { JSX } from "react";

interface Props {
  info: JSX.Element | null;
  onClick: () => void;
}

export const AboutMe = ({ info, onClick }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={AboutMeImg} alt="About me" className={styles.image} />
      </div>
      <div className={styles.titleContainer}>
        <p className={styles.mainTitle}>{messages.mainTitle}</p>
        <p className={styles.titleDescription}>{messages.titleDescription}</p>
        <Button onClick={onClick} className={styles.showButton}>
          {!info ? messages.showButton : messages.closeButton}
        </Button>
      </div>
    </div>
  );
};
