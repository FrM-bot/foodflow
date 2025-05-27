import * as yup from 'yup'
import { passwordRules, usernameSignUp } from '.'

export const SignUpSchema = yup.object().shape({
  fullName: yup
    .string()
    .min(5, 'Full Name must be at least 5 characters long')
    .max(65, 'Full name  must contain a maximum of 65 characters')
    .required('Required, Please Enter your Full Name'),
  username: yup
    .string()
    .min(5, 'Username must be at least 5 characters long')
    .max(25, 'User name  must contain a maximum of 25 characters')
    .required('Required, Please Enter your User Name ')
    .matches(usernameSignUp, 'spaces not allowed'),
  email: yup.string().max(255).email('Must be a valid email').required('Email is required'),
  password: yup
    .string()
    .required('Please Enter your password')
    .matches(
      passwordRules,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character: ! @ # . * % & @'
    ),
})

export type SignUp = yup.InferType<typeof SignUpSchema>
