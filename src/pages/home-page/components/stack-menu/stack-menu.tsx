import { messages } from "./messages";
import styles from "./stack-menu.module.css";
import { Button } from "@/components/button/button";
import { RandomProject } from "@/components/random-projects/random-projects";
import { TechStack } from "./components/tech-stack/tech-stack";
import type { JSX } from "react";
import { useState } from "react";

export const StackMenu = () => {
  const randomBlock = <RandomProject />;
  const techStackBlock = <TechStack />;

  const [stackContent, setStackContent] = useState<JSX.Element | null>(null);
  const [activeButton, setActiveButton] = useState<
    "random" | "tech-stack" | null
  >(null);

  const toggleStackContent = (type: "random" | "tech-stack" | null) => {
    if (activeButton === type) {
      setStackContent(null);
      setActiveButton(null);
    } else {
      setStackContent(type === "random" ? randomBlock : techStackBlock);
      setActiveButton(type);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <Button
          isActive={activeButton === "random"}
          onClick={() => toggleStackContent("random")}
          className={styles.stackButton}
        >
          {messages.randomButton}
        </Button>
        <Button
          isActive={activeButton === "tech-stack"}
          onClick={() => toggleStackContent("tech-stack")}
          className={styles.stackButton}
        >
          {messages.techStackButton}
        </Button>
      </div>
      <div className={styles.stackContainer}>{stackContent}</div>
    </div>
  );
};
