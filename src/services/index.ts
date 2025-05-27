import { logIn } from './logIn'

export const Services = {
  users: {
    getAll: 'https://jsonplaceholder.typicode.com/users',
    getSession: 'https://jsonplaceholder.typicode.com/users/1',
  },
  auth: {
    signUp: 'https://jsonplaceholder.typicode.com/users',
    logIn: 'https://jsonplaceholder.typicode.com/users/1',
  },
}

export const ServerHandler = {
  logIn,
} as const

export type ServerHandler = keyof typeof ServerHandler
