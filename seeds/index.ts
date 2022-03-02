import { connect } from 'mongoose'

import config from './../config'
import { usersSeed } from './users'
import { animalsSeed } from './animals'

(async function () {
  const db = await connect(config.dbConnectionUrl)

  async function runSeeds (): Promise<void> {
    await usersSeed()
    await animalsSeed()
  }

  runSeeds()
    .then(() => console.log('Seed concluída com sucesso!'))
    .catch(error => console.log('error', error))
    .finally(() => db.disconnect())
})()
