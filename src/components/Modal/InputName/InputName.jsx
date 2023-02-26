import classNames from "classnames";
import { useField } from "formik";
import { useEffect, useState } from "react";
import { MAXNAMELENGTH } from "../../../constants/helpers";
import styles from "./_styles.module.scss";

export const InputName = ({ label, ...props }) => {
  const [field] = useField(props);
  const [done, setDone] = useState("notDone");

  useEffect(() => {
    field.value && field.value.length <= MAXNAMELENGTH
      ? setDone("done")
      : setDone("notDone");
  }, [field.value]);

  const error = (e) => {
    if (e.target.value.length > MAXNAMELENGTH) {
      e.target.classList.add(styles.err);
    } else {
      e.target.classList.remove(styles.err);
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <input
          {...field}
          {...props}
          className={classNames(styles.input)}
          onInput={(e) => error(e)}
          required
        />
        <label htmlFor={field.name} className={styles[done]}></label>
      </div>

      {field.value.length <= MAXNAMELENGTH ? null : (
        <div className={styles.error_text}>У вас длинное имя</div>
      )}
    </div>
  );
};
