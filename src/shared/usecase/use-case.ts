export interface UseCase {
  handle(data: any): Promise<any>
}
