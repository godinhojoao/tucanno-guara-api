import { User } from '../src/model/User'

export const usersSeed = async (): Promise<void> => {
  const users = [
    User.create({
      email: 'test@gmail.com',
      password: '$2b$10$3cqMvF0cRmsD7hy7htSu7e1ZVirj9q2kzuWzK5FkAw2OWbpvRrK7K' // test123
    }),
    User.create({
      email: 'joao@gmail.com',
      password: '$2b$10$3cqMvF0cRmsD7hy7htSu7e1ZVirj9q2kzuWzK5FkAw2OWbpvRrK7K' // test123
    })
  ]

  await User.deleteMany({})

  users.forEach(async (user) => await user)
}
