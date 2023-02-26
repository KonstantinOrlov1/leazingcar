import { useState } from "react";
import { Btn2 } from "../Btns/Btn2/Btn2";
import { Modal } from "../Modal/Modal";
import styles from "./_styles.module.scss";

export const LeazingLeft = ({ number }) => {
  const arr = [
    {
      title: "Авто в лизинг для физических лиц",
      subtitle: "Получите машину за 5 дней",
      btn: "Оставить заявку",
    },
    {
      title: "Авто в лизинг для юр лиц",
      subtitle: "Получите машину за 2 дня",
      btn: "Недоступно",
    },
    {
      title: "Авто в лизинг для всех",
      subtitle: "Получите машину",
      btn: "Грузим",
    },
    {
      title: "Клевые авто в лизинг",
      subtitle: "Получите машину",
      btn: "Позвоним вам",
    },
    {
      title: "Яркие авто в лизинг",
      subtitle: "Получите машину",
      btn: "Стать клиентом",
    },
    {
      title: "Быстрые авто в лизинг",
      subtitle: "Получите машину",
      btn: "Подробнее",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.blok_left}>
      {number ? (
        <h2 className={styles.title_h2}>{arr[number].title}</h2>
      ) : (
        <h1 className={styles.title}>{arr[number].title}</h1>
      )}

      <h3 className={styles.subtitle}>{arr[number].subtitle}</h3>

      {arr[number].btn === "Недоступно" ? (
        <Btn2 disabled>{arr[number].btn}</Btn2>
      ) : arr[number].btn === "Грузим" ? (
        <Btn2 isLoading>{arr[number].btn}</Btn2>
      ) : (
        <Btn2 onClick={openModalHandler}>{arr[number].btn}</Btn2>
      )}

      {isOpen ? (
        <div className={styles.back}>
          <Modal event={openModalHandler} />
        </div>
      ) : null}
    </div>
  );
};
