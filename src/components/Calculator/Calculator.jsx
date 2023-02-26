import { FormCalc } from "../Form/Form";
import styles from "./_styles.module.scss";

export const Calculator = () => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>
        Рассчитайте стоимость автомобиля в лизинг
      </h2>
      <FormCalc />
    </div>
  );
};
