import { LeazingLeft } from "../LeazingLeft/LeazingLeft";
import styles from "./_styles.module.scss";
import img11 from "./imgs/img11.jpg";
import img22 from "./imgs/img22.jpg";
import img33 from "./imgs/img33.jpg";
import img44 from "./imgs/img44.jpg";
import { useEffect, useState } from "react";
import { Points } from "../Points/Points";
import classNames from "classnames";

export const Leazing = () => {
  const imgArr = [img22, img33, img44, img11, img22, img11];
  const reverseArr = imgArr.slice(0).reverse();

  let [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(next(), 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const back = () => {
    return () =>
      setCurrentIndex(
        currentIndex === 0
          ? (currentIndex = reverseArr.length - 1)
          : (currentIndex = currentIndex - 1)
      );
  };

  const next = () => {
    return () =>
      setCurrentIndex(
        currentIndex < reverseArr.length - 1
          ? (currentIndex = currentIndex + 1)
          : (currentIndex = 0)
      );
  };

  return (
    <section className={styles.section}>
      <div className={styles.root}>
        <LeazingLeft number={currentIndex} />
        <div className={styles.img_container}>
          {reverseArr.map((elem, index) => {
            let position = "nextSlide";

            if (index === currentIndex) {
              position = "this";
            }

            return (
              <img
                className={classNames(styles.img, styles[position])}
                key={index}
                src={elem}
                alt="photo"
                title="photo"
                loading="lazy"
              />
            );
          })}
          <div className={styles.btn_container}>
            <span
              className={classNames(styles.anim, styles.left)}
              onClick={back()}
            ></span>
            <span className={styles.right} onClick={next()}></span>
          </div>
        </div>
      </div>
      <div className={styles.decor}>
        <Points number={currentIndex} length={reverseArr.length} />
      </div>
    </section>
  );
};
