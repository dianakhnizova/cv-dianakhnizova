import { useEffect, useState } from "react";
import styles from "./toggle-themes.module.css";
import ToggleDark from "@/assets/toggle-black.svg";
import ToggleLight from "@/assets/toggle-white.svg";

export const ToggleThemes = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleThemes = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
  };

  useEffect(() => {
    document.documentElement.classList.add(theme);
  }, []);

  return (
    <div className={styles.container}>
      {theme === "dark" ? (
        <img
          src={ToggleDark}
          alt="Toggle-Themes"
          className={styles.toggleThemesButton}
          onClick={toggleThemes}
        />
      ) : (
        <img
          src={ToggleLight}
          alt="Toggle-Themes"
          className={styles.toggleThemesButton}
          onClick={toggleThemes}
        />
      )}
    </div>
  );
};
