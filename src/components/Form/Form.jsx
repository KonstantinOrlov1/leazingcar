import { Form, Formik } from "formik";
import { useState } from "react";
import { useSelector } from "react-redux";
import { BID, CONTRIBUTION, COST, SIZES, TERM } from "../../constants/helpers";
import { selectContributionFilter } from "../../store/contribution/selectors";
import { selectCostModuleFilter } from "../../store/cost/selectors";
import { selectTermFilter, selectTermModule } from "../../store/term/selectors";
import { Btn2 } from "../Btns/Btn2/Btn2";
import { Modal } from "../Modal/Modal";
import { Payment } from "../Payment/Payment";
import { CustomInputContribution } from "./CustominputContribution";
import { CustomInputCost } from "./CustomInputCost";
import { CustomInputTerm } from "./CustominputTerm";
import styles from "./_styles.module.scss";

const validate = (values) => {
  const errors = {};

  if (values.contribution > 60) {
    values.contribution = 60;
  }

  if (values.contribution < 10) {
    values.contribution = 10;
  }

  return errors;
};

const initialValue = {
  cost: COST,
  contribution: CONTRIBUTION,
  term: TERM,
};

export const FormCalc = () => {
  const cost = useSelector(selectCostModuleFilter);
  const contribution = useSelector(selectContributionFilter);
  const term = useSelector(selectTermFilter);

  const payment = Math.floor(
    (cost - (cost * contribution) / 100) * (BID + BID / ((1 + BID) ** term - 1))
  );
  const sum = Math.floor((cost * contribution) / 100 + term * payment);

  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Formik
      initialValues={initialValue}
      validate={validate}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm({ values: initialValue });
      }}
    >
      <div>
        <Form>
          <div className={styles.form}>
            <CustomInputCost
              label="Стоимость автомобиля"
              name="cost"
              type="number"
            />
            <CustomInputContribution
              label="Первоначальный взнос"
              name="contribution"
              type="number"
            />
            <CustomInputTerm
              label="Срок лизинга"
              name="term"
              type="number"
              max="100"
            />
          </div>
          <div className={styles.action_container}>
            <Payment title="Сумма договора лизинга" value={sum} />
            <Payment title="Ежемесячный платеж от" value={payment} />
            <Btn2 type="submit" size={SIZES.l} onClick={openModalHandler}>
              Оставить заявку
            </Btn2>
          </div>
        </Form>
        {isOpen ? (
          <div className={styles.back}>
            <Modal event={openModalHandler} />
          </div>
        ) : null}
      </div>
    </Formik>
  );
};
