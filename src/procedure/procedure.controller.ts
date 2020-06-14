import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
} from '@nestjs/common';
import { ProcedureService } from './procedure.service';

@Controller('procedure')
export class ProcedureController {
  constructor(private procedureService: ProcedureService) {}
  @Get('/:id?')
  getProcedure() {
    return this.procedureService.getProcedure();
  }

  @Delete('/:id')
  deleteProcedure() {
    return this.procedureService.deleteProcedure();
  }

  @Post()
  createProcedure() {
    return this.procedureService.createProcedure();
  }

  @Patch('/:id')
  updateProcedure() {
    return this.procedureService.updateProcedure();
  }
}
