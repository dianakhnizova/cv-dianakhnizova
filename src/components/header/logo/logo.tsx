import styles from "./logo.module.css";
import { NavLink } from "react-router-dom";
import LogoIcon from "../../../assets/profile.svg";
import { PagePath } from "@/router/enums";

interface Props {
  onClick?: () => void;
  isMobile?: boolean;
}

export const Logo = ({ onClick, isMobile }: Props) => {
  return isMobile ? (
    <button onClick={onClick} className={styles.button}>
      <img src={LogoIcon} alt="Logo" className={styles.logoImage} />
    </button>
  ) : (
    <NavLink to={PagePath.root} className={styles.menuItem}>
      <img src={LogoIcon} alt="Logo" className={styles.logoImage} />
    </NavLink>
  );
};
