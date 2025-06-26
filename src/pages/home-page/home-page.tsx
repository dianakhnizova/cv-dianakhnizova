import { Wrapper } from "@/components/wrapper/wrapper";
import ImageBackground from "@/assets/IMAGE.png";
import styles from "./home-page.module.css";
import { messages } from "./messages";

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <Wrapper className={styles.homeWrapper}>
        <img src={ImageBackground} alt="home-page" className={styles.image} />
        <div className={styles.titleContainer}>
          <p className={styles.titleProf}>{messages.titleProfession}</p>
          <p className={styles.titleName}>{messages.titleName}</p>
          <p className={styles.titleDescription}>{messages.titleDescription}</p>
        </div>
      </Wrapper>
    </div>
  );
};
