import { ApolloError } from 'apollo-server'
import { sign } from 'jsonwebtoken'
import { compare } from 'bcrypt'

import { User } from '../../../model/User'
import { ISignInInput, ISignInResponse } from '../../../interfaces'
import { config } from '../../../../config'

const signIn = async (
  _: unknown,
  { input: { email, password } }: { input: ISignInInput }
): Promise<ISignInResponse | ApolloError> => {
  const currentUser = await User.findOne({ email })
  if (!currentUser) { return new ApolloError('user not found', 'not found') }

  const isValidPassword = await compare(password, currentUser.password)
  if (!isValidPassword) { return new ApolloError('invalid password', 'invalid') }

  const token = sign({ email }, config.auth.jwtSecret, { expiresIn: '1h' })
  return { auhtenticated: true, token }
}

export { signIn }
