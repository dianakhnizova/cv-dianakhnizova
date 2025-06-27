import styles from "./logo.module.css";
import LogoIcon from "@/assets/logo.jpg";

export const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img src={LogoIcon} alt="logo" className={styles.logo} />
    </div>
  );
};
