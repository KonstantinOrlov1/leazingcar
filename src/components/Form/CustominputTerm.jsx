import classNames from "classnames";
import { useField } from "formik";
import { useDispatch } from "react-redux";
import { termSlice } from "../../store/term";
import { RangeInput } from "../RangeInput/RangeInput";
import styles from "./_styles.module.scss";

export const CustomInputTerm = ({ label, ...props }) => {
  const [field] = useField(props);

  if (field.value > 60) {
    field.value = 60;
  } else if (field.value < 1) {
    field.value = 1;
  }

  const dispatch = useDispatch();

  const onInput = (value) => dispatch(termSlice.actions.onInput(value));

  return (
    <div className={styles.input_container}>
      <label htmlFor={props.name} className={styles.label}>
        {label}
      </label>
      <input
        {...field}
        {...props}
        onInput={(e) => onInput(e.target.value)}
        className={classNames(styles.input, styles[field.name])}
      />
      <RangeInput min="1" max="60" value={field} />
    </div>
  );
};
