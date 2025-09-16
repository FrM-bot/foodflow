import { $ResponseStatus } from '@/enums'
import type { SignUp } from '@/schemas/sign-up.schema'
import axios from 'axios'
import { Services } from '.'

export const signUp = async ({ email, password, lastName, name }: SignUp) => {
  try {
    const response = await axios.post(Services.auth.signUp, {
      email,
      password,
      lastName,
      name,
    })

    if (response.data.status === $ResponseStatus.error) {
      return [response.data as string, null]
    }

    return [null, response.data]
  } catch (error) {
    console.error(error)
    return [error as string, null]
  }
}
