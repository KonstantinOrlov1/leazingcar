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
  const imgArr = [img11, img22, img33, img44, img11, img22];

  let [img, setImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(forward(), 10000);
    return () => clearInterval(interval);
  }, [imgArr]);

  function forward() {
    if (img === imgArr.length - 1) {
      return () => setImg(0);
    } else {
      return () => setImg(img + 1);
    }
  }

  function back() {
    if (img === 0) {
      return () => setImg(imgArr.length - 1);
    }

    return () => setImg(img - 1);
  }

  return (
    <section className={styles.section}>
      <div className={styles.root}>
        <LeazingLeft number={img} />
        <div className={styles.img_container}>
          <img
            className={classNames(styles.img, styles.fade_in)}
            src={imgArr[img]}
            alt="photo"
            title="photo"
            loading="lazy"
          />
          <div className={styles.btn_container}>
            <span
              className={classNames(styles.anim, styles.left)}
              onClick={back()}
            ></span>
            <span className={styles.right} onClick={forward()}></span>
          </div>
        </div>
      </div>
      <div className={styles.decor}>
        <Points number={img} />
      </div>
    </section>
  );
};
