import { connect } from 'mongoose'
import * as dotenv from 'dotenv'

import { usersSeed } from './users'
import { animalsSeed } from './animals'

dotenv.config({
  path: process.env.NODE_ENV === 'dev' ? '.env.test' : '.env'
});

(async function () {
  const db = await connect(process.env.DB_CONNECTION_URL as string)

  async function runSeeds (): Promise<void> {
    await usersSeed()
    await animalsSeed()
  }

  runSeeds()
    .then(() => console.log('Seed concluída com sucesso!'))
    .catch(error => console.log('error', error))
    .finally(() => db.disconnect())
})()
