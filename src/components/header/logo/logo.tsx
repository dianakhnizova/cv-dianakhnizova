import styles from "./logo.module.css";
import { NavLink } from "react-router-dom";
import LogoIcon from "../../../assets/profile.svg";
import { PagePath } from "@/router/enums";
import { ToggleThemes } from "@/components/toggle-themes/toggle-themes";

export const Logo = () => {
  return (
    <div className={styles.container}>
      <NavLink to={PagePath.root} className={styles.menuItem}>
        <img src={LogoIcon} alt="Logo" className={styles.logoImage} />
      </NavLink>
      <ToggleThemes />
    </div>
  );
};
