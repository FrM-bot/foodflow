import type GetAllUsers from '@/response/users/getAll.json'

export function formatUsers(users: typeof GetAllUsers) {
  return users.map((user) => {
    return {
      id: user.id,
      fullName: user.name,
      username: user.username,
      email: user.email,
      role: 'user',
    }
  })
}
