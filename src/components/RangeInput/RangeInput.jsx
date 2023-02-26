import { useDispatch } from "react-redux";
import { contributionSlice } from "../../store/contribution";
import { costSlice } from "../../store/cost";
import { termSlice } from "../../store/term";
import styles from "./_styles.module.scss";

export const RangeInput = ({ min, max, value }) => {
  const dispatch = useDispatch();

  const b = Math.round(((value.value - min) / (max - min)) * 100);

  const onInput = (e) => {
    const a = Math.round(((e.target.value - min) / (max - min)) * 100);
    e.target.style.background = `-webkit-linear-gradient(left, #ff9514 0%, #ff9514 ${a}%, #ffffff ${a}%, #ffffff 100%)`;

    if (e.target.name === "cost") {
      dispatch(costSlice.actions.onInput(e.target.value));
    }

    if (e.target.name === "term") {
      dispatch(termSlice.actions.onInput(e.target.value));
    }

    if (e.target.name === "contribution") {
      dispatch(contributionSlice.actions.onInput(e.target.value));
    }
  };

  return (
    <input
      type="range"
      min={min}
      max={max}
      step="1"
      {...value}
      onInput={onInput}
      className={styles.input}
      style={{
        background: `-webkit-linear-gradient(left, #ff9514 0%, #ff9514 ${b}%, #ffffff ${b}%, #ffffff 100%)`,
        height: "2px",
      }}
    />
  );
};
