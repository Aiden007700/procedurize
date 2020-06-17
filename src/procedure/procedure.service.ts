import { Get, Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProcedureRepository } from './procedure.repository';
import { ProcedureDto } from './dto/procedure.dto';
import { ProjectRepository } from '../projects/project.repository';
import { Procedure } from './procedure.entity';
import { User } from '../auth/user.entity';

@Injectable()
export class ProcedureService {
  constructor(
    @InjectRepository(ProcedureRepository)
    private procedureRepository: ProcedureRepository,
    @InjectRepository(ProjectRepository)
    private projectRepository: ProjectRepository,
  ) {}

  async getProcedure(id: number): Promise<Procedure> {
    return this.procedureRepository.getProcedure(id);
  }

  async deleteProcedure(id: number): Promise<Procedure> {
    return this.procedureRepository.deleteProcedure(id);
  }

  async createProcedure(procedureDto: ProcedureDto, user: User): Promise<Procedure> {
    const { projectId } = procedureDto;
    const project = await this.projectRepository.getProject(projectId, user);
    const procedure = await this.procedureRepository.createProcedure(
      procedureDto,
      project,
    );
    return procedure;
  }

  async updateProcedure(id: number, procedureDto: ProcedureDto) {
    return await this.procedureRepository.updateProcedure(id, procedureDto);
  }
}
