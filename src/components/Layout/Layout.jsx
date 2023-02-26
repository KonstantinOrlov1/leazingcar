import classNames from "classnames";
import { Header } from "../Header/Header";
import styles from "./_styles.module.scss";

export const Layout = ({ children }) => {
  return (
    <div className={classNames(styles.root, styles.container)}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
