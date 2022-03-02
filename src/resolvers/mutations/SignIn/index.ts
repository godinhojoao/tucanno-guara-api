import { ApolloError } from 'apollo-server'
import { sign } from 'jsonwebtoken'
import { compare } from 'bcrypt'

import { User } from '../../../model/User'
import { ISignInInput, ISignInResponse } from '../../../interfaces'
import config from '../../../../config'

const signIn = async (
  _: unknown,
  { input: { email, password } }: { input: ISignInInput }
): Promise<ISignInResponse | ApolloError> => {
  const currentUser = await User.findOne({ email })
  if (!currentUser) { return new ApolloError('invalid email or password', 'invalid') }

  const isValidPassword = await compare(password, currentUser.password)
  if (!isValidPassword) { return new ApolloError('invalid email or password', 'invalid') }

  const token = sign({ email }, config.auth.jwtSecret, { expiresIn: config.auth.tokenExpirationTime })
  return { auhtenticated: true, token }
}

export { signIn }
