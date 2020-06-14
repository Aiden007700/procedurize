import { Body, Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectRepository } from './project.repository';
import { ProjectDto } from './dto/project.dto';
import { Project } from './project.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(ProjectRepository)
    private projectRepository: ProjectRepository,
  ) {}

  async getProject(id?: number): Promise<Project | Project[]> {
    if (id) return this.projectRepository.getProject(id)
    return this.projectRepository.getAllProjects()
  }

  async createProject(projectDto: ProjectDto): Promise<Project> {
    return await this.projectRepository.createProject(projectDto);
  }

  async deleteProject(id: number): Promise<Project> {
    return this.projectRepository.deleteProject(id)
  }

  async updateProject(id: number, projectDto: ProjectDto): Promise<Project> {
     return this.projectRepository.updateProject(id, projectDto);
  }
}
