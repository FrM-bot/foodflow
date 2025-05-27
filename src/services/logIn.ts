import { $ResponseStatus } from '@/enums'
import type { LogIn } from '@/schemas/login.schema'
import axios from 'axios'
import { Services } from '.'

export const logIn = async ({ email, password }: LogIn) => {
  try {
    const response = await axios.post(Services.auth.logIn, {
      email,
      password,
    })

    if (response.data.status === $ResponseStatus.ERROR) {
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
