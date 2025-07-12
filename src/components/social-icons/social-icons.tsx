import styles from './social-icons.module.css';
import InstaIcon from '@/assets/instagram.svg';
import GitHub from '@/assets/github.svg';
import Telegram from '@/assets/telegram.svg';
import InstaLightImg from '@/assets/insta-light.svg';
import TelegramLightImg from '@/assets/telegram-light.svg';
import GitLightImg from '@/assets/git-light.svg';
import { useTheme } from '@/utils/hooks/use-theme';
import { Theme } from '@/sources/enums';

export const SocialIcons = () => {
  const { theme } = useTheme();
  const imageInsta = theme === Theme.Dark ? InstaIcon : InstaLightImg;
  const imageTelegram = theme === Theme.Dark ? Telegram : TelegramLightImg;
  const imageGit = theme === Theme.Dark ? GitHub : GitLightImg;

  return (
    <div className={styles.socialIconsContainer}>
      <img src={imageInsta} alt="Instagram" className={styles.icon} />
      <img src={imageGit} alt="GitHub" className={styles.icon} />
      <img src={imageTelegram} alt="Telegram" className={styles.icon} />
    </div>
  );
};
