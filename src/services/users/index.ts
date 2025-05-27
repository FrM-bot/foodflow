import { formatUsers } from '@/adapters/users'
import { $ResponseStatus } from '@/enums'
import axios from 'axios'
import { Services } from '..'

export const getAllUsers = async () => {
  try {
    const response = await axios.get(Services.users.getAll)

    if (response.data.status === $ResponseStatus.ERROR) {
      return {
        error: 'Ha ocurrido un error',
      }
    }

    const users = formatUsers(response.data)

    return {
      data: users,
    }
  } catch (error) {
    console.error(error)
    return {
      error: 'Ha ocurrido un error',
    }
  }
}
