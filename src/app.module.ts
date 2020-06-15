import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './cofig/typeorm.config';
import { ProjectsModule } from './projects/projects.module';
import { ProcedureModule } from './procedure/procedure.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), AuthModule, ProjectsModule, ProcedureModule],
  exports: [ProjectsModule]
})
export class AppModule {}
