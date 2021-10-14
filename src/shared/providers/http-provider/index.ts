import { HttpRequest } from './interfaces/http-request'

export interface HttpProvider {
  request<T = any>(httpRequest: HttpRequest): Promise<T>
}
