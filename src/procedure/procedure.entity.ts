import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from '../projects/project.entity';

@Entity()
export class Procedure extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({type: 'text', nullable: true})
  description: string

  @Column({type: 'text', nullable: true})
  observation: string

  @Column({type: 'text', nullable: true})
  hypothesis: string

  @Column('text')
  orderSequence

  @ManyToOne(type => Project, project => project.procedures)
  project: Project
}