import { Formik, Form, Field, ErrorMessage } from 'formik'
import Header from '../../Header'
import { SIGNUP_FORM_VALIDATION } from '../../../utils/validationSchemas'
import styles from './SignupForm.module.sass'
import ValidatedField from '../ValidatedField'

function SignupForm () {
  const initialValues = {
    name: '',
    surname: '',
    email: '',
    phoneNumber: '',
    password: '',
    passwordConfirmation: '',
    userType: '',
    termsOfService: false
  }

  const handleSubmit = (values, { resetForm }) => {
    resetForm()
  }

  return (
    <>
      <Header />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={SIGNUP_FORM_VALIDATION}
      >
        {({ errors, touched }) => {
          return (
            <>
              <div className={styles.header}>CREATE AN ACCOUNT</div>
              <p className={styles.subHeader}>
                We always keep your name and email address private
              </p>
              <Form className={styles.form}>
                <div className={styles.inputGroup}>
                  <ValidatedField name='name' placeholder='Alex' />
                  <ValidatedField name='surname' placeholder='Alexandrov' />
                  <ValidatedField
                    name='email'
                    type='email'
                    placeholder='your@mail.com'
                  />
                  <ValidatedField
                    name='phoneNumber'
                    placeholder='+380XXXXXXXXX'
                  />
                  <ValidatedField
                    name='password'
                    type='password'
                    placeholder='Password'
                  />
                  <ValidatedField
                    name='passwordConfirmation'
                    type='password'
                    placeholder='Confirm Password'
                  />
                </div>

                <div className={styles.radioGroup}>
                  <div className={styles.buyerWrapper}>
                    <label className={styles.radioLabel}>
                      <Field
                        type='radio'
                        name='userType'
                        value='buyer'
                        className={styles.radio}
                      />
                      <span className={styles.radioTitle}>Join As a Buyer</span>
                      <p className={styles.radioDescription}>
                        I am looking for a Name, Logo or Tagline for my
                        business, brand or product.
                      </p>
                    </label>
                  </div>

                  <div className={styles.creativeWrapper}>
                    <label className={styles.radioLabel}>
                      <Field
                        type='radio'
                        name='userType'
                        value='creative'
                        className={styles.radio}
                      />
                      <span className={styles.radioTitle}>
                        Join As a Creative
                      </span>
                      <p className={styles.radioDescription}>
                        I plan to submit name ideas, Logo designs or sell names
                        in Domain Marketplace.
                      </p>
                    </label>
                  </div>
                  <ErrorMessage
                    name='userType'
                    component='span'
                    className={styles.radioError}
                  />
                </div>

                <label className={styles.checkboxLabel}>
                  <Field
                    type='checkbox'
                    name='termsOfService'
                    className={styles.checkbox}
                  />
                  By clicking this checkbox, you agree to our{' '}
                  <a
                    href='/terms-of-service'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={styles.link}
                  >
                    Terms of Service
                  </a>
                  .
                  <ErrorMessage
                    name='termsOfService'
                    component='span'
                    className={styles.error}
                  />
                </label>

                <button type='submit' className={styles.submitButton}>
                  Create Account
                </button>
              </Form>
            </>
          )
        }}
      </Formik>
    </>
  )
}

export default SignupForm
