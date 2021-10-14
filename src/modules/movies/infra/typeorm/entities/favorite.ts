import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { Movie } from './movie'

@Entity('favorites')
export class Favorite {
  @PrimaryColumn()
  public id: string;

  @Column()
  public userId: string;

  @Column()
  public movieId: string;

  @ManyToOne(() => Movie, movie => movie)
  @JoinColumn({ name: 'movieId' })
  public movie: Movie;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date
}
