import styles from "./_styles.module.scss";
import logo from "./imgs/logo.svg";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { Btn1 } from "../Btns/Btn1/Btn1";

export const Header = () => {
  return (
    <header className={classNames(styles.container, styles.header)}>
      <div className={styles.logo_container}>
        <a href="/">
          <img
            src={logo}
            alt="логотип"
            title="лизинговая кампания"
            className={styles.logo}
          />
        </a>
        <span className={styles.logo_stick}></span>
        <span className={styles.logo_title}>лизинговая кампания</span>
      </div>
      <div className={styles.nav}>
        <div className={styles.nav_container}>
          <NavLink to="/leazing" className={styles.link}>
            Лизинг
          </NavLink>
          <NavLink to="/catalog" className={styles.link}>
            Каталог
          </NavLink>
          <NavLink to="/about" className={styles.link_menu}>
            О нас
            <div className={styles.menu}>
              <div className={styles.punkt}>Для личного использования</div>
              <div className={styles.punkt}>Для физических лиц</div>
              <div className={styles.punkt}>Калькулятор</div>
            </div>
          </NavLink>
        </div>
        <Btn1>Оставить заявку</Btn1>
      </div>
    </header>
  );
};
