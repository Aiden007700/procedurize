import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectDto } from './dto/project.dto';
import { Project } from './project.entity';

@Controller('projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @Get('/:id?')
  getProject(@Param('id') id: string): Promise<Project | Project[]> {
    return this.projectsService.getProject(parseInt(id))
  }

  @Delete('/:id')
  deleteProject(@Param('id', ParseIntPipe) id: number) {
    return this.projectsService.deleteProject(id);
  }

  @Post()
  createProject(@Body() projectDto: ProjectDto): Promise<Project> {
    return this.projectsService.createProject(projectDto)
  }

  @Patch('/:id')
  updateProject(
    @Param('id', ParseIntPipe) id: number,
    @Body() projectDto: ProjectDto): Promise<Project> {
    return this.projectsService.updateProject(id, projectDto);
  }
}
