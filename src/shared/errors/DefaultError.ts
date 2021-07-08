import { ErrorTypes } from './ErrorTypes'

interface IDefaultErrorParams {
  type: ErrorTypes
  message: string
}

export class DefaultError extends Error {
  public type: ErrorTypes
  public message: string

  constructor(params: IDefaultErrorParams) {
    super(params.message)
    this.type = params.type
    this.message = params.message
  }
}
