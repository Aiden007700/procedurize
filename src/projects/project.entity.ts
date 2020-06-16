import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Procedure } from '../procedure/procedure.entity'

@Entity()
export class Project extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({nullable: true})
  description: string

  // @ManyToOne(type => Procedure, procedure => procedure.project)
  @OneToMany(type => Procedure, procedure => procedure.project)
  procedures: Procedure[]
}