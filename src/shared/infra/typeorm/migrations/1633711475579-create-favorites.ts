import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createFavorites1633711475579 implements MigrationInterface {
  private favorites = new Table({
    name: 'favorites',
    columns: [
      {
        name: 'id',
        type: 'varchar',
        isPrimary: true
      },
      {
        name: 'movieId',
        type: 'varchar'
      },
      {
        name: 'userId',
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
    ],
    foreignKeys: [
      {
        name: 'fk_movie_favorite',
        columnNames: ['movieId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'movies',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      {
        name: 'fk_user_favorite',
        columnNames: ['userId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    ]
  })

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.favorites)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.favorites)
  }
}
