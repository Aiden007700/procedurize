import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectDto } from './dto/project.dto';
import { Project } from './project.entity';
import { ApiImplicitParam } from '@nestjs/swagger/dist/decorators/api-implicit-param.decorator';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../auth/decorators/get-user.decorator';
import { User } from '../auth/user.entity';

@Controller('projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @Get('/:id?')
  @UseGuards(AuthGuard())
  @ApiImplicitParam({ name: 'id', required: false })
  getProject(
    @Param('id') id: string,
    @GetUser() user: User,
  ): Promise<Project | Project[]> {
    return this.projectsService.getProject(user, parseInt(id));
  }

  @Delete('/:id')
  @UseGuards(AuthGuard())
  deleteProject(@Param('id', ParseIntPipe) id: number, @GetUser() user: User) {
    return this.projectsService.deleteProject(id, user);
  }

  @Post()
  @UseGuards(AuthGuard())
  createProject(
    @Body() projectDto: ProjectDto,
    @GetUser() user: User,
  ): Promise<Project> {
    return this.projectsService.createProject(projectDto, user);
  }

  @Patch('/:id')
  @UseGuards(AuthGuard())
  updateProject(
    @Param('id', ParseIntPipe) id: number,
    @Body() projectDto: ProjectDto,
    @GetUser() user: User,
  ): Promise<Project> {
    return this.projectsService.updateProject(id, projectDto, user);
  }
}
