import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'

@Entity('users')
export class User {
  @PrimaryColumn()
  public id: string;

  @Column()
  public fullName: string

  @Column()
  public email: string

  @Column()
  public password: string

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date
}
