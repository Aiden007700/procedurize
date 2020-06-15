import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProcedureRepository } from './procedure.repository';
import { ProcedureDto } from './dto/procedure.dto';

@Injectable()
export class ProcedureService {
  constructor(
    @InjectRepository(ProcedureRepository)
    private procedureRepository: ProcedureRepository,
  ) {}
  async getProcedure() {
    return 'get procedure not implemented';
  }

  async deleteProcedure() {
    return 'delete procedure not implemented';
  }

  async createProcedure(procedureDto: ProcedureDto) {
    return this.procedureRepository.createProcedure(procedureDto);
  }

  async updateProcedure() {
    return 'update procedure not implemented';
  }
}
