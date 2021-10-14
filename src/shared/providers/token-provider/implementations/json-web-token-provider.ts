import { TokenProvider } from '..'
import { verify as verifyToken, sign as signToken } from 'jsonwebtoken'
import { tokenConfig } from '@/config/token-config'
import { TokenProviderContract } from '../contracts/token-provider-contract'

export class JsonWebTokenProvider implements TokenProvider {
  public sign (subject: string): string {
    const token = signToken({}, process.env.APP_KEY, {
      subject,
      expiresIn: tokenConfig.expiresIn
    })

    return token
  }

  public verify (token: string): TokenProviderContract.TokenResponse {
    const { sub } = verifyToken(token, process.env.APP_KEY) as TokenProviderContract.TokenResponse
    return { sub }
  }
}
