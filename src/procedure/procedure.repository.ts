import { EntityRepository, Repository } from 'typeorm';
import { Procedure } from './procedure.entity';
import { ProcedureDto } from './dto/procedure.dto';
import { Project } from '../projects/project.entity';
import { NotFoundException } from '@nestjs/common';

@EntityRepository(Procedure)
export class ProcedureRepository extends Repository<Procedure> {
  async getProcedure(id: number): Promise<Procedure> {
    const procedure = await this.findOne(id);
    if (!procedure) {
      throw new NotFoundException();
    }
    return procedure;
  }

  async deleteProcedure(id: number): Promise<Procedure> {
    const pocedure = await this.getProcedure(id);
    await this.delete(id);
    return pocedure;
  }

  async createProcedure(
    procedureDto: ProcedureDto,
    project: Project,
  ): Promise<Procedure> {
    const {
      name,
      orderSequence,
      description,
      hypothesis,
      observation,
    } = procedureDto;

    const procedure = new Procedure();
    procedure.name = name;
    procedure.orderSequence = orderSequence;
    procedure.description = description;
    procedure.hypothesis = hypothesis;
    procedure.observation = observation;
    procedure.project = project;
    await procedure.save();

    return procedure;
  }

  async updateProcedure(
    id: number,
    procedureDto: ProcedureDto,
  ): Promise<Procedure> {
    const procedure = await this.getProcedure(id);
    const {
      name,
      orderSequence,
      description,
      hypothesis,
      observation,
    } = procedureDto;

    procedure.name = name || procedure.name;
    procedure.orderSequence = orderSequence || procedure.orderSequence;
    procedure.description = description || procedure.description;
    procedure.hypothesis = hypothesis || procedure.hypothesis;
    procedure.observation = observation || procedure.observation;
    await procedure.save();

    return procedure;
  }
}
