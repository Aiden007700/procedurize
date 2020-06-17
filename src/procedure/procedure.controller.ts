import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post, UseGuards,
} from '@nestjs/common';
import { ProcedureService } from './procedure.service';
import { ProcedureDto } from './dto/procedure.dto';
import { Procedure } from './procedure.entity';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../auth/decorators/get-user.decorator';
import { User } from '../auth/user.entity';

@Controller('procedure')
export class ProcedureController {
  constructor(private procedureService: ProcedureService) {}

  @Get('/:id')
  getProcedure(@Param('id', ParseIntPipe) id: number): Promise<Procedure> {
    return this.procedureService.getProcedure(id);
  }

  @Delete('/:id')
  deleteProcedure(@Param('id', ParseIntPipe) id: number): Promise<Procedure> {
    return this.procedureService.deleteProcedure(id);
  }

  @Post()
  @UseGuards(AuthGuard())
  createProcedure(@Body() procedureDto: ProcedureDto, @GetUser() user: User): Promise<Procedure> {
    return this.procedureService.createProcedure(procedureDto, user);
  }

  @Patch('/:id')
  updateProcedure(
    @Param('id', ParseIntPipe) id: number,
    @Body() procedureDto: ProcedureDto,
  ): Promise<Procedure> {
    return this.procedureService.updateProcedure(id, procedureDto);
  }
}
