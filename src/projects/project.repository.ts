import { EntityRepository, Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';
import { Project } from './project.entity';
import { ProjectDto } from './dto/project.dto';
import { User } from '../auth/user.entity';

@EntityRepository(Project)
export class ProjectRepository extends Repository<Project> {
  async getProject(id: number, user: User): Promise<Project> {
    const project = await this.findOne({
      where: { id, user },
      relations: ['procedures'],
    });
    if (!project) {
      throw new NotFoundException();
    }
    return project;
  }

  async getAllProjects(user: User): Promise<Project[]> {
    const projects = this.find({ where: { user } });
    return projects;
  }

  async createProject(projectDto: ProjectDto, user: User): Promise<Project> {
    const { name, description } = projectDto;
    const project = new Project();
    console.log(name, description);
    project.name = name;
    project.description = description || null;
    project.user = user;
    await project.save();
    return project;
  }

  async deleteProject(id: number, user: User): Promise<Project> {
    const project = await this.getProject(id, user);
    await this.delete(project.id);
    return project;
  }

  async updateProject(id, projectDto, user: User): Promise<Project> {
    const project = await this.getProject(id, user);
    const { name, description } = projectDto;

    project.name = name || project.name;
    project.description = description || project.description;

    await this.save(project);
    return project;
  }
}
