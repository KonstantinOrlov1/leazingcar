import classNames from "classnames";
import { useField } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { contributionSlice } from "../../store/contribution";
import { selectCostModuleFilter } from "../../store/cost/selectors";
import { RangeInput } from "../RangeInput/RangeInput";
import styles from "./_styles.module.scss";

export const CustomInputContribution = ({ label, ...props }) => {
  const [field] = useField(props);
  if (field.value > 60) {
    field.value = 60;
  } else if (field.value < 10) {
    field.value = 10;
  }

  const count = useSelector(selectCostModuleFilter);

  const dispatch = useDispatch();

  const onInput = (value) => dispatch(contributionSlice.actions.onInput(value));

  return (
    <div className={styles.input_container}>
      <label htmlFor={props.name} className={styles.label}>
        {label}
      </label>
      <div className={classNames(styles.input)}>
        {Math.round((count * field.value) / 100)}
        <div className={styles.input_mini_container}>
          <input
            {...field}
            {...props}
            className={styles.input_mini}
            onInput={(e) => onInput(e.target.value)}
          />
          <span className={styles.persent}>%</span>
        </div>
      </div>
      <RangeInput min="10" max="60" value={field} />
    </div>
  );
};
