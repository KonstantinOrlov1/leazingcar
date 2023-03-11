import { NavLink } from "react-router-dom";
import styles from "./_styles.module.scss";

export const ModalBurger = ({ event }) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <span className={styles.exit} onClick={event}></span>
      </div>
      <div className={styles.link_container}>
        <NavLink to="/leazing">Лизинг</NavLink>
        <NavLink to="/catalog">Каталог</NavLink>
        <NavLink to="/about">О нас</NavLink>
      </div>
    </div>
  );
};
