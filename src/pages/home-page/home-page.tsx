import { Wrapper } from "@/components/wrapper/wrapper";
import ImageBackground from "@/assets/IMAGE.png";
import styles from "./home-page.module.css";
import { Preview } from "./preview/preview";
import { Contacts } from "./contacts/contacts";
import { MainTitle } from "./main-title/main-title";

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <img src={ImageBackground} alt="home-page" className={styles.image} />

      <Wrapper className={styles.homeWrapper}>
        <MainTitle />
        <Preview />
        <Contacts />
      </Wrapper>
    </div>
  );
};
