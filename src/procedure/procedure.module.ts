import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProcedureService } from './procedure.service';
import { ProcedureRepository } from './procedure.repository';
import { ProcedureController } from './procedure.controller';
import { ProjectsModule } from '../projects/projects.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProcedureRepository]),
    ProjectsModule
  ],
  providers: [ProcedureService],
  controllers: [ProcedureController],
})
export class ProcedureModule {}
