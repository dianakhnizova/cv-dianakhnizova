import styles from "./logo.module.css";
import { ToggleThemes } from "@/components/toggle-themes/toggle-themes";

export const Logo = () => {
  return (
    <div className={styles.container}>
      <ToggleThemes />
    </div>
  );
};
