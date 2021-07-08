import {
  HttpGetClient,
  HttpGetParams
} from './protocols'

interface HTTPResponse<T> {
  body: T
  statusCode: number
}

export class HttpClientProvider implements HttpGetClient {
  public async get<T = any>(params: HttpGetParams): Promise<HTTPResponse<T>> {
    const { url, headers, query } = params
    const queryParams = new URLSearchParams(query).toString()
    const fullURL = `${url}?${queryParams}`
    const response = await fetch(fullURL, {
      headers: {
        ...headers
      },
      method: 'GET'
    })

    try {
      const body = await response.json()
      return {
        body,
        statusCode: response.status
      }
    } catch (error) {
      return {
        body: error.message,
        statusCode: response.status
      }
    }
  }
}
