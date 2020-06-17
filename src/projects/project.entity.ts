import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Procedure } from '../procedure/procedure.entity'
import { User } from '../auth/user.entity';

@Entity()
export class Project extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({nullable: true})
  description: string

  @OneToMany(type => Procedure, procedure => procedure.project)
  procedures: Procedure[]

  @ManyToOne(type => User, user => user.projects)
  user: User
}