import { SIZES } from "../../../constants/helpers";
import styles from "./_styles.module.scss";
import classNames from "classnames";

export const Btn2 = ({
  children,
  onClick,
  size = SIZES.m,
  disabled = false,
  isLoading = false,
  type,
}) => {
  return isLoading ? (
    <button type={type} className={classNames(styles.load, styles[size])}>
      <span className={styles.spinner}></span>
    </button>
  ) : (
    <button
      disabled={disabled}
      onClick={onClick}
      className={classNames(styles.root, styles[size])}
      type={type}
    >
      {children}
    </button>
  );
};
