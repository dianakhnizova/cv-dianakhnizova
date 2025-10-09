import classNames from 'classnames';
import styles from './MainTitle.module.css';
import { messages } from './messages';

interface Props {
  isLowHeight: boolean;
  isScrolled: boolean;
}

export const MainTitle = ({ isLowHeight, isScrolled }: Props) => {
  return (
    <div
      className={classNames(
        styles.container,
        isScrolled ? styles.shrink : isLowHeight ? styles.viewHeight : ''
      )}
    >
      <p className={styles.titleName}>{messages.titleName}</p>
      <p className={styles.titleProf}>{messages.titleProfession}</p>
    </div>
  );
};
