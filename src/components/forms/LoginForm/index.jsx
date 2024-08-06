import { Formik, Form } from "formik";
import Header from "../../Header";
import { LOGIN_FORM_VALIDATION } from "../../../utils/validationSchemas";
import styles from "./LoginForm.module.sass";
import ValidatedField from "../../ValidatedField";

function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = ({ resetForm }) => {
    resetForm();
  };

  return (
    <>
      <Header />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={LOGIN_FORM_VALIDATION}
      >
        {({}) => {
          return (
            <div className={styles.formWrapper}>
              <div className={styles.formTitle}>LOGIN TO YOUR ACCOUNT</div>
              <Form className={styles.form}>
                <label className={styles.label}>
                  <ValidatedField
                    name="email"
                    type="text"
                    placeholder="your@mail"
                    autoFocus
                  />
                </label>
                <label className={styles.label}>
                  <ValidatedField
                    name="password"
                    type="password"
                    placeholder="password"
                  />
                </label>

                <button className={styles.formBtn} type="submit">
                  OK
                </button>
              </Form>
            </div>
          );
        }}
      </Formik>
    </>
  );
}

export default LoginForm;
