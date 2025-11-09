import styles from './Logo.module.css';
import LogoIcon from '@/assets/logo.svg';

export const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img src={LogoIcon} alt="logo" className={styles.logo} />
    </div>
  );
};
