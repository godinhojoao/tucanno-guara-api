import { connect } from 'mongoose'

import config from './../../config'
import { User } from './../model/User'
import { Animal } from './../model/Animal'

(async function () {
  await connect(config.dbConnectionUrl)
})()

const db = {
  User,
  Animal
}

export { db }
