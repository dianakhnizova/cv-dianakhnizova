import { cardItemsList } from "../project-card/card-items-list/card-items-list";
import { ProjectCard } from "../project-card/project-card";
import styles from "./project-card-list.module.css";

export const ProjectCardList = () => {
  return (
    <ul className={styles.container}>
      {cardItemsList.map((card) => {
        return <ProjectCard key={card.name} card={card} />;
      })}
    </ul>
  );
};
