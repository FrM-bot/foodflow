import { $ResponseStatus } from '@/enums'
import type { SignUp } from '@/schemas/signUp.schema'
import axios from 'axios'
import { Services } from '.'

export const signUp = async ({ email, password, fullName, username }: SignUp) => {
  try {
    const response = await axios.post(Services.auth.signUp, {
      email,
      password,
      username,
      fullName,
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
