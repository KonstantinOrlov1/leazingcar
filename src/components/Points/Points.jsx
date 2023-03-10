import styles from "./_styles.module.scss";
import point from "./imgs/point.svg";
import whitepoint from "./imgs/whitepoint.svg";

export const Points = ({ number, length }) => {
  return (
    <div className={styles.decor}>
      {new Array(length).fill(null).map((_, index) => (
        <img
          src={index === number ? point : whitepoint}
          key={index}
          loading="lazy"
          className={styles.point}
        />
      ))}
    </div>
  );
};
