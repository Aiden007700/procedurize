import { Body, Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectRepository } from './project.repository';
import { ProjectDto } from './dto/project.dto';
import { Project } from './project.entity';
import { User } from '../auth/user.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(ProjectRepository)
    private projectRepository: ProjectRepository,
  ) {}

  async getProject(user: User, id?: number): Promise<Project | Project[]> {
    if (id) return this.projectRepository.getProject(id, user)
    return this.projectRepository.getAllProjects(user)
  }

  async createProject(projectDto: ProjectDto, user: User): Promise<Project> {
    return await this.projectRepository.createProject(projectDto, user);
  }

  async deleteProject(id: number, user: User): Promise<Project> {
    return this.projectRepository.deleteProject(id, user)
  }

  async updateProject(id: number, projectDto: ProjectDto, user: User): Promise<Project> {
     return this.projectRepository.updateProject(id, projectDto, user);
  }
}
