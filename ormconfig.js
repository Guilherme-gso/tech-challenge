const devConfig = {
  name: 'default',
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: ['./src/modules/**/infra/typeorm/entities/*.ts'],
  migrations: ['./src/shared/**/infra/typeorm/migrations/*.ts'],
  cli: {
    migrationsDir: './src/shared/infra/typeorm/migrations'
  }
}

const prodConfig = {
  name: 'default',
  type: 'postgres',
  ssl: { rejectUnauthorized: false },
  url: process.env.DATABASE_URL,
  entities: ['./dist/modules/**/infra/typeorm/entities/*.js'],
  migrations: ['./dist/shared/**/infra/typeorm/migrations/*.js'],
  cli: {
    migrationsDir: './src/shared/infra/typeorm/migrations'
  }
}

const configs = {
  dev: devConfig,
  prod: prodConfig
}

module.exports = configs[process.env.NODE_ENV]
