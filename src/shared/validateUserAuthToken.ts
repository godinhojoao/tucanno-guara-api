import { verify } from 'jsonwebtoken'

import config from './../../config'

function validateJwtTokenFormat (scheme: string, token: string) {
  if (!scheme || !token) { return false }
  if (!/^Bearer$/i.test(scheme)) { return false }

  return true
}

function validateUserAuthToken (authorizationToken: string): boolean {
  const [scheme, token] = authorizationToken.split(' ')

  const isValidJwtToken = validateJwtTokenFormat(scheme, token)
  if (!isValidJwtToken) { return false }

  try {
    const authenticatedUser = verify(token, config.auth.jwtSecret)
    if (!authenticatedUser) { return false }

    return true
  } catch (error) {
    return false
  }
}

export { validateUserAuthToken }
