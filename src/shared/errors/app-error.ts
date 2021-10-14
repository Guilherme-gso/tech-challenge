export class AppError {
  public name: string;

  public message: string;

  public statusCode?: number

  constructor (name: string, message: string, statusCode = 400) {
    this.name = name
    this.message = message
    this.statusCode = statusCode
  }
}
