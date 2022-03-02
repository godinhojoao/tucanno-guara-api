import { ErrorCodeMapper, MongooseError } from '../interfaces'

function mongooseErrorHandling (error: MongooseError): string[] {
  const errorsCodeMapper: ErrorCodeMapper = {
    11000: () => {
      const [[key, value]] = Object.entries(error.keyValue)
      return [`${key} with value ${value} already exists`, 'error saving']
    }
  }

  const hasErrorHandler = error && error.code && errorsCodeMapper[error.code]
  if (hasErrorHandler) {
    return errorsCodeMapper[error.code]()
  }

  return ['', '']
}

export { mongooseErrorHandling }
