import classNames from "classnames";
import { Form, Formik } from "formik";
import { useSelector } from "react-redux";
import { MAXNAMELENGTH, PHONENUMBER } from "../../constants/helpers";
import { selectContributionFilter } from "../../store/contribution/selectors";
import { selectCostModuleFilter } from "../../store/cost/selectors";
import { selectTermFilter } from "../../store/term/selectors";
import { Btn2 } from "../Btns/Btn2/Btn2";
import { InputName } from "./InputName/InputName";
import { InputPhone } from "./InputPhone/InputPhone";
import styles from "./_styles.module.scss";

const validate = (values) => {
  const errors = {};

  if (values.name.length > MAXNAMELENGTH) {
    errors.name = "";
  }

  if (values.phone.length < PHONENUMBER) {
    errors.phone = "";
  }

  return errors;
};

const initialValue = {
  phone: "",
  name: "",
};

export const Modal = ({ event }) => {
  const cost = useSelector(selectCostModuleFilter);
  const contribution = useSelector(selectContributionFilter);
  const term = useSelector(selectTermFilter);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <span className={styles.exit} onClick={event}></span>
      </div>
      <div>
        <h3 className={styles.title}>Онлайн-заявка</h3>
        <span className={styles.subtitle}>
          Заполните форму, и мы вскоре свяжемся с вами, чтобы ответить на все
          вопросы
        </span>
        <Formik
          initialValues={initialValue}
          validate={validate}
          onSubmit={async (values, { resetForm }) => {
            const obj = {
              phone: values.phone,
              name: values.name,
              cost: cost,
              contribution: contribution,
              term: term,
            };

            // const response = await fetch("/url", {
            //   method: "POST",
            //   headers: {
            //     "Content-Type": "application/json;charset=utf-8",
            //   },
            //   body: JSON.stringify(obj),
            // });

            resetForm({ values: initialValue });
            event();
          }}
        >
          <Form className={styles.form}>
            <div className={styles.form_container}>
              <InputPhone name="phone" type="tel" placeholder="Телефон*" />
              <InputName name="name" type="text" placeholder="Имя" />
            </div>

            <div className={styles.submit}>
              <p className={styles.submit_text}>
                Нажимая на кнопку «Оставить заявку», я даю согласие{" "}
                <a href="" target="_blank">
                  на обработку персональных данных
                </a>
              </p>
              <Btn2 type="submit">Оставить заявку</Btn2>
            </div>
          </Form>
        </Formik>

        <div className={styles.messenger_container}>
          <a
            href=""
            target="_blank"
            className={classNames(styles.messenger, styles.wa)}
          ></a>
          <a
            href=""
            target="_blank"
            className={classNames(styles.messenger, styles.telega)}
          ></a>
        </div>
      </div>
    </div>
  );
};
