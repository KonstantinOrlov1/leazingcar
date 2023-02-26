import classNames from "classnames";
import { useField } from "formik";
import { useDispatch } from "react-redux";
import { costSlice } from "../../store/cost";
import { RangeInput } from "../RangeInput/RangeInput";
import styles from "./_styles.module.scss";

export const CustomInputCost = ({ label, ...props }) => {
  const [field] = useField(props);

  if (field.value > 6000000) {
    field.value = 6000000;
  } else if (field.value < 1000000) {
    field.value = 1000000;
  }

  const dispatch = useDispatch();

  const onInput = (value) => dispatch(costSlice.actions.onInput(value));

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
      <RangeInput min="1000000" max="6000000" value={field} />
    </div>
  );
};
