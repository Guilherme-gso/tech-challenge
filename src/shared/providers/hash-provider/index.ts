import { HashProviderContract } from './contracts/hash-provider-contract'

export interface HashProvider {
  hash(stringToBeHashed: string): Promise<string>
  compare(hashCompare:HashProviderContract.HashCompare): Promise<boolean>
}
