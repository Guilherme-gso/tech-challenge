import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'

@Entity('movies')
export class Movie {
  @PrimaryColumn()
  public id?: string;

  @Column()
  public title: string;

  @Column()
  public year: string;

  @Column()
  public imdbId: string;

  @Column()
  public poster: string;

  @CreateDateColumn()
  public createdAt?: Date;

  @UpdateDateColumn()
  public updatedAt?: Date
}
