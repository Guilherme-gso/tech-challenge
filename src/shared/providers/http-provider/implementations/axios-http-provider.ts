import { HttpRequest } from '../interfaces/http-request'
import { AppError } from '@/shared/errors/app-error'
import { HttpProvider } from '..'
import { axiosClient } from '@/config/axios-client'

export class AxiosHttpProvider implements HttpProvider {
  private httpClient = axiosClient

  public async request<T = any> (httpRequest: HttpRequest): Promise<T> {
    try {
      const response = await this.httpClient.request<T>({
        data: httpRequest.data,
        headers: httpRequest.headers,
        url: httpRequest.url,
        method: httpRequest.method,
        params: httpRequest.params
      })

      return response.data
    } catch (error: any) {
      if (error.response.data) {
        throw new AppError('http-error', error.response.data.message, 400)
      } else {
        throw new AppError('http-error', error.message, 400)
      }
    }
  }
}
