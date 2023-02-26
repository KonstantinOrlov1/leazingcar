import styles from "./_styles.module.scss";

export const Payment = ({ title, value }) => {
  return (
    <div className={styles.root}>
      <span className={styles.title}>{title}</span>
      <div className={styles.value}>{value.toLocaleString("ru")}</div>
    </div>
  );
};
