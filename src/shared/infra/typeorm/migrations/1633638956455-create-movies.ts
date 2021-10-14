import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createMovies1633638956455 implements MigrationInterface {
  private movies = new Table({
    name: 'movies',
    columns: [
      {
        name: 'id',
        type: 'varchar',
        isPrimary: true
      },
      {
        name: 'title',
        type: 'varchar'
      },
      {
        name: 'year',
        type: 'varchar'
      },
      {
        name: 'imdbId',
        type: 'varchar'
      },
      {
        name: 'poster',
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
    await queryRunner.createTable(this.movies)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.movies)
  }
}
