import { Wrapper } from "@/components/wrapper/wrapper";
import ImageBackground from "@/assets/IMAGE.png";
import styles from "./home-page.module.css";
import { messages } from "./messages";
import { Preview } from "./preview/preview";
import { Contacts } from "./contacts/contacts";

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <img src={ImageBackground} alt="home-page" className={styles.image} />

      <Wrapper className={styles.homeWrapper}>
        <div className={styles.titleContainer}>
          <p className={styles.titleProf}>{messages.titleProfession}</p>
          <p className={styles.titleName}>{messages.titleName}</p>
          <p className={styles.titleDescription}>{messages.titleDescription}</p>
        </div>
        <Preview />
        <Contacts />
      </Wrapper>
    </div>
  );
};
