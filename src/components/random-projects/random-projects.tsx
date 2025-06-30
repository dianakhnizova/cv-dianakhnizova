import styles from "./random-project.module.css";
import { cardItemsList } from "../project-card/card-items-list/card-items-list";
import { ProjectCard } from "../project-card/project-card";
import { useMemo } from "react";
import classNames from "classnames";

interface Props {
  isScrolled: boolean;
}

const getRandomProjects = () => {
  const randomList = [...cardItemsList]
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);
  return randomList.slice(0, 2);
};

export const RandomProject = ({ isScrolled }: Props) => {
  const randomProjects = useMemo(() => getRandomProjects(), []);

  return (
    <ul
      className={classNames(styles.container, isScrolled ? styles.shrink : "")}
    >
      {randomProjects.map((card, index) => {
        return <ProjectCard key={index} card={card} />;
      })}
    </ul>
  );
};
