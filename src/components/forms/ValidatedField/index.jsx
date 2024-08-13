import React from 'react'
import { Field, ErrorMessage } from 'formik'
import classNames from 'classnames'
import styles from './ValidatedField.module.sass'

function ValidatedField ({ name, type, placeholder }) {
  return (
    <div className={styles.fieldContainer}>
      <Field name={name}>
        {({ field, form }) => {
          const { errors, touched } = form
          const className = classNames(styles.input, {
            [styles.valid]: !errors[name] && touched[name],
            [styles.invalid]: errors[name] && touched[name]
          })

          return (
            <label className={styles.label}>
              <div className={styles.inputWrapper}>
                <input
                  {...field}
                  type={type}
                  placeholder={placeholder}
                  className={className}
                />
                <ErrorMessage
                  name={name}
                  component='div'
                  className={styles.error}
                />
              </div>
            </label>
          )
        }}
      </Field>
    </div>
  )
}

export default ValidatedField
