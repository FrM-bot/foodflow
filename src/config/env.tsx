import { object, string } from 'zod'

const schema = object({
  VITE_BASE_SERVER_URL: string()
    .url({
      message: 'SERVER_URL must be a valid URL',
    })
    .min(1, {
      message: 'SERVER_URL is required',
    }),
})

type Env = typeof schema._type

let envResult: Env

try {
  envResult = schema.parse(import.meta.env)
} catch (error) {
  alert(error)
  throw new Error(`Error validating environment variables: ${error}`)
}

export const env = {
  BASE_SERVER_URL: envResult.VITE_BASE_SERVER_URL,
}
