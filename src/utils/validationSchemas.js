import * as yup from "yup";

export const LOGIN_FORM_VALIDATION = yup.object({
  email: yup
    .string()
    .trim()
    .email("Invalid email address")
    .required("Email is required"),

  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(32)
    .matches(/(?=.*[a-z])/, "Password must contain at lest lower case letter")
    .matches(/(?=.*[A-Z])/, "Password must contain at lest upper case letter")
    .matches(
      /(?=.*[!@#$%^&*])/,
      "Password must contain at lest special character (!@#$%^&*)"
    )
    .required("Password is required"),
});

export const SIGNUP_FORM_VALIDATION = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, "The name must contain at least two characters")
    .max(20)
    .matches(/^[A-Z]/, "The name must start with a capital letter")
    .required("Name is required"),

  surname: yup
    .string()
    .trim()
    .min(2, "The surname must contain at least two characters")
    .max(32)
    .matches(/^[A-Z]/, "The surname must start with a capital letter")
    .required("Surname is required"),

  email: yup
    .string()
    .trim()
    .email("Invalid email address")
    .required("Email is required"),

  phoneNumber: yup
    .string()
    .trim()
    .matches(/^\+380\d{9}$/, "Phone number is not valid: +380XXXXXXXXX")
    .required("Phone number is required"),

  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(32)
    .matches(/(?=.*[a-z])/, "Password must contain at lest lower case letter")
    .matches(/(?=.*[A-Z])/, "Password must contain at lest upper case letter")
    .matches(
      /(?=.*[!@#$%^&*])/,
      "Password must contain at lest special character (!@#$%^&*)"
    )
    .required("Password is required"),

  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Password confirmation is required"),

  userType: yup.string().required("User type is required"),

  termsOfService: yup
    .boolean()
    .oneOf([true], "You must accept the terms of service"),
});
