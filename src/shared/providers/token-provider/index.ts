import { TokenProviderContract } from './contracts/token-provider-contract'

export interface TokenProvider {
  sign(subject: string): string
  verify(token: string): TokenProviderContract.TokenResponse
}
