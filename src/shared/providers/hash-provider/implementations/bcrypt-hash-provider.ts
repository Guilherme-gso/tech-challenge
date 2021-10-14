import { HashProvider } from '..'
import { HashProviderContract } from '../contracts/hash-provider-contract'
import bcrypt from 'bcryptjs'

export class BcryptHashProvider implements HashProvider {
  public async hash (stringToBeHashed: string): Promise<string> {
    return bcrypt.hash(stringToBeHashed, 10)
  }

  public async compare (hashCompare: HashProviderContract.HashCompare): Promise<boolean> {
    return bcrypt.compare(hashCompare.payload, hashCompare.hashedString)
  }
}
