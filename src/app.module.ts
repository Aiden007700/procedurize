import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './cofig/typeorm.config';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), AuthModule, ProjectsModule],
})
export class AppModule {}
