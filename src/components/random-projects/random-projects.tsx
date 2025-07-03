import styles from "./random-project.module.css";
import { cardItemsList } from "../project-card/card-items-list/card-items-list";
import { ProjectCard } from "../project-card/project-card";
import { useMemo } from "react";

const getRandomProjects = () => {
  const randomList = [...cardItemsList]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  return randomList;
};

export const RandomProject = () => {
  const randomProjects = useMemo(() => getRandomProjects(), []);

  return (
    <ul className={styles.container}>
      {randomProjects.map((card, index) => {
        return <ProjectCard key={index} card={card} />;
      })}
    </ul>
  );
};
