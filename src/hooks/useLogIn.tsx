import type { LogIn } from '@/schemas/login.schema'
// import handleError from '@/errors'
import { logIn as logInService } from '@/services/logIn'
import { useState } from 'react'

function useLogIn() {
  const [loading, setLoading] = useState(false)

  const logIn = async ({ email, password }: LogIn) => {
    setLoading(true)

    try {
      const response = logInService({ email, password })

      return response
    } catch (error) {
      console.error(error)
      //   return handleError(error)
    } finally {
      setLoading(false)
    }
  }

  return {
    logIn,
    loading,
  }
}

export default useLogIn
