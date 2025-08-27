import { $ResponseStatus } from '@/enums'
import type { SignUp } from '@/schemas/sign-up.schema'
import axios from 'axios'
import { Services } from '.'

export const signUp = async ({ email, password }: SignUp) => {
  try {
    const response = await axios.post(Services.auth.signUp, {
      email,
      password,
    })

    if (response.data.status === $ResponseStatus.error) {
      return {
        error: 'Ha ocurrido un error',
      }
    }

    return {
      success: 'Registro exitoso',
    }
  } catch (error) {
    console.error(error)
    return {
      error: 'Ha ocurrido un error',
    }
  }
}
