import { redisConfig } from '@/config/redis-config'
import Redis, { Redis as RedisClient } from 'ioredis'
import { CacheProvider } from '..'

export class RedisCacheProvider implements CacheProvider {
  private redisClient: RedisClient

  constructor () {
    this.redisClient = new Redis(redisConfig)
  }

  public async save (key: string, value: any): Promise<void> {
    this.redisClient.set(key, JSON.stringify(value))
  }

  public async recover<T> (key: string): Promise<T | null> {
    const data = await this.redisClient.get(key)

    if (!data) return null

    const parsedData = JSON.parse(data) as T

    return parsedData
  }
}
