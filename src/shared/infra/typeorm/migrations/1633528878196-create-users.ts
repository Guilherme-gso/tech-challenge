import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createUsers1633528878196 implements MigrationInterface {
  private users = new Table({
    name: 'users',
    columns: [
      {
        name: 'id',
        type: 'varchar',
        isPrimary: true
      },
      {
        name: 'fullName',
        type: 'varchar'
      },
      {
        name: 'email',
        type: 'varchar',
        isUnique: true
      },
      {
        name: 'password',
        type: 'varchar'
      },
      {
        name: 'createdAt',
        type: 'timestamp',
        default: 'now()'
      },
      {
        name: 'updatedAt',
        type: 'timestamp',
        default: 'now()'
      }
    ]
  })

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.users)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.users)
  }
}
