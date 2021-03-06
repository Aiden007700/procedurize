import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProcedureService } from './procedure.service';
import { ProcedureRepository } from './procedure.repository';
import { ProcedureController } from './procedure.controller';
import { ProjectsModule } from '../projects/projects.module';
import { ProjectRepository } from '../projects/project.repository';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forFeature([ProcedureRepository, ProjectRepository]),
    ProjectsModule,
  ],
  providers: [ProcedureService],
  controllers: [ProcedureController],
})
export class ProcedureModule {}
