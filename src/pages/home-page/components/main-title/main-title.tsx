import classNames from 'classnames';
import styles from './main-title.module.css';
import { messages } from './messages';
import { useTheme } from '@/utils/hooks/use-theme';
import { Theme } from '@/sources/enums';
import DarkBackgroundImg from '@/assets/dark-background.jpg';
import LightBackgroundImg from '@/assets/light-background.png';

interface Props {
  isLowHeight: boolean;
  isScrolled: boolean;
}

export const MainTitle = ({ isLowHeight, isScrolled }: Props) => {
  const { theme } = useTheme();
  const imageBackground =
    theme === Theme.Dark ? DarkBackgroundImg : LightBackgroundImg;

  return (
    <div
      className={classNames(
        styles.container,
        isScrolled ? styles.shrink : isLowHeight ? styles.viewHeight : ''
      )}
    >
      <img src={imageBackground} alt="Background" className={styles.image} />
      <div className={styles.titleContainer}>
        <p className={styles.titleProf}>{messages.titleProfession}</p>
        <p className={styles.titleName}>{messages.titleName}</p>
      </div>
    </div>
  );
};
