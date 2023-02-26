import { useField } from "formik";
import { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import { PHONENUMBER } from "../../../constants/helpers";
import styles from "./_styles.module.scss";

export const InputPhone = ({ label, ...props }) => {
  const [field] = useField(props);
  const [done, setDone] = useState("notDone");

  useEffect(() => {
    field.value.length === PHONENUMBER ? setDone("done") : setDone("notDone");
  }, [field.value]);

  const mask = {
    mask: "+7 (999) 999 99 99",
    maskChar: "",
  };

  const error = (e) => {
    if (e.target.value.length < PHONENUMBER && e.target.value.length > 4) {
      e.target.classList.add(styles.err);
    } else {
      e.target.classList.remove(styles.err);
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <InputMask
          {...mask}
          {...field}
          {...props}
          className={styles.input}
          onInput={(e) => error(e)}
        />
        <label htmlFor={field.name} className={styles[done]}></label>
      </div>

      {field.value.length > 4 && field.value.length < PHONENUMBER ? (
        <div className={styles.error_text}>Введите ваш номер</div>
      ) : null}
    </div>
  );
};
