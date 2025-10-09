import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { MainSection } from '../../components/main-section/MainSection';
import styles from './root.module.css';

export const Root = () => {
  return (
    <div className={styles.root}>
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
};
