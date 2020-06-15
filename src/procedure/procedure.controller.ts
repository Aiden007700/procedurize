import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
} from '@nestjs/common';
import { ProcedureService } from './procedure.service';
import { ProcedureDto } from './dto/procedure.dto';

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
  createProcedure(@Body() procedureDto: ProcedureDto) {
    return this.procedureService.createProcedure(procedureDto);
  }

  @Patch('/:id')
  updateProcedure() {
    return this.procedureService.updateProcedure();
  }
}
