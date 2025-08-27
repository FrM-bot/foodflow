import { api } from '@/api'
import { captureServerError } from '@/lib/error'
import { $ResponseStatus } from '../enums'
import { Services } from './index'

export const getSession = async () => {
  try {
    const response = await api.post(Services.auth.session)

    const [status, message] = captureServerError(response)

    if (status === $ResponseStatus.error) {
      return {
        success: false,
        message,
      }
    }

    return {
      success: true,
      data: response.data,
      // optional, if you want to show a message
      // message: response.data.message,
    }
  } catch (_) {
    return {
      success: false,
      message: 'Ha ocurrido un error al obtener el usuario',
    }
  }
}
