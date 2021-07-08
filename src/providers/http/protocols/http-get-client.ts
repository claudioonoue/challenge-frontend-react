import { HTTPResponse } from './HTTPResponse'

export interface HttpGetParams {
  url: string
  query?: {}
  headers?: Record<string, string>
}

export interface HttpGetClient {
  get: <T = any>(params: HttpGetParams) => Promise<HTTPResponse<T>>
}
