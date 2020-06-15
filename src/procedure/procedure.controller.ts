import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ProcedureService } from './procedure.service';
import { ProcedureDto } from './dto/procedure.dto';
import { Procedure } from './procedure.entity';

@Controller('procedure')
export class ProcedureController {
  constructor(private procedureService: ProcedureService) {}

  @Get('/:id')
  getProcedure(@Param('id', ParseIntPipe) id: number): Promise<Procedure> {
    return this.procedureService.getProcedure(id);
  }

  // how shuld I handle this? move it to projects? of so how do i name it?
  @Get('by-project/:projectId')
  getProceduresByProject(
    @Param('projectId', ParseIntPipe) projectId: number,
  ): Promise<Procedure[]> {
    return this.procedureService.getProceduresByProject(projectId);
  }

  @Delete('/:id')
  deleteProcedure(@Param('id', ParseIntPipe) id: number): Promise<Procedure> {
    return this.procedureService.deleteProcedure(id);
  }

  @Post()
  createProcedure(@Body() procedureDto: ProcedureDto): Promise<Procedure> {
    return this.procedureService.createProcedure(procedureDto);
  }

  @Patch('/:id')
  updateProcedure(
    @Param('id', ParseIntPipe) id: number,
    @Body() procedureDto: ProcedureDto,
  ): Promise<Procedure> {
    return this.procedureService.updateProcedure(id, procedureDto);
  }
}
