import { EntityRepository, Repository } from 'typeorm';
import { Procedure } from './procedure.entity';
import { ProcedureDto } from './dto/procedure.dto';
import { ProjectRepository } from '../projects/project.repository';
import { InjectRepository } from '@nestjs/typeorm';

@EntityRepository(Procedure)
export class ProcedureRepository extends Repository<Procedure> {
  constructor(
    @InjectRepository(ProjectRepository)
    private projectRepository: ProjectRepository,
  ) {
    super();
  }
  async createProcedure(procedureDto: ProcedureDto) {
    const {
      projectId,
      name,
      orderSequence,
      description,
      hypothesis,
      observation,
    } = procedureDto;
    const project = await this.projectRepository.getProject(projectId)

    const procedure = new Procedure()
    procedure.name = name
    procedure.orderSequence = orderSequence
    procedure.description = description
    procedure.hypothesis = hypothesis
    procedure.observation = observation
    procedure.project = project
    await procedure.save()

    project.procedures = [procedure]
    await project.save()
    return procedure
  }
}
