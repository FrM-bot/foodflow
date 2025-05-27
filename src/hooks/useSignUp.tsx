import type { SignUp } from '@/schemas/signUp.schema'
import { signUp as signUpService } from '@/services/signUp'
import { useState } from 'react'

function useSignUp() {
  const [loading, setLoading] = useState(false)

  const signUp = async ({ email, password, fullName, username }: SignUp) => {
    try {
      const result = await signUpService({ email, password, fullName, username })

      return result
    } catch (error) {
      console.error(error)
      return {
        error: 'Ha ocurrido un error',
      }
    } finally {
      setLoading(false)
    }
  }

  return {
    signUp,
    loading,
  }
}

export default useSignUp
