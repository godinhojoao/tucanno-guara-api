import * as dotenv from 'dotenv'
import { connect } from 'mongoose'

import { User } from './../model/User'
import { Animal } from './../model/Animal'

dotenv.config({
  path: process.env.NODE_ENV === 'dev' ? '.env.test' : '.env'
});

(async function () {
  await connect(process.env.DB_CONNECTION_URL as string)
})()

const db = {
  User,
  Animal
}

export { db }
