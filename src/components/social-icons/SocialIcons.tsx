import styles from './SocialIcons.module.css';
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
      <a
        href="https://instagram.com/dianakhnizova"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={imageInsta} alt="Instagram" className={styles.icon} />
      </a>
      <a
        href="https://github.com/dianakhnizova"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={imageGit} alt="GitHub" className={styles.icon} />
      </a>
      <a
        href="https://t.me/dianakhnizova"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={imageTelegram} alt="Telegram" className={styles.icon} />
      </a>
    </div>
  );
};
