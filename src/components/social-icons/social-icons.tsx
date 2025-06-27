import styles from "./social-icons.module.css";
import InstaIcon from "@/assets/instagram.svg";
import GitHub from "@/assets/github.svg";
import Telegram from "@/assets/telegram.svg";

export const SocialIcons = () => {
  return (
    <div className={styles.socialIconsContainer}>
      <img src={InstaIcon} alt="Instagram" className={styles.icon} />
      <img src={GitHub} alt="GitHub" className={styles.icon} />
      <img src={Telegram} alt="Telegram" className={styles.icon} />
    </div>
  );
};
