import { connect } from 'mongoose'

import { User } from './../model/User'
import { Animal } from './../model/Animal'

(async function () {
  await connect('mongodb://localhost:27017/test')
})()

const db = {
  User,
  Animal
}

export { db }
