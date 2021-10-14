export interface HttpRequest {
  url: string
  method: 'POST' | 'GET' | 'PUT' | 'DELETE'
  headers?: any
  data?: any
  params?: any
}
