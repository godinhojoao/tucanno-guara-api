import { ApolloError } from 'apollo-server'
import { sign } from 'jsonwebtoken'
import { compare } from 'bcrypt'

import { User } from '../../../model/User'
import { ISignInInput, ISignInResponse } from '../../../interfaces'

const signIn = async (
  _: unknown,
  { input: { email, password } }: { input: ISignInInput }
): Promise<ISignInResponse | ApolloError> => {
  const currentUser = await User.findOne({ email })
  if (!currentUser) { return new ApolloError('invalid email or password', 'invalid') }

  const isValidPassword = await compare(password, currentUser.password)
  if (!isValidPassword) { return new ApolloError('invalid email or password', 'invalid') }

  const token = sign({ email }, process.env.JWT_SECRET as string, { expiresIn: process.env.TOKEN_EXPIRATION_TIME as string })
  return { auhtenticated: true, token }
}

export { signIn }
