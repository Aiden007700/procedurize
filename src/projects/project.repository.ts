import { EntityRepository, Repository } from 'typeorm'
import { NotFoundException } from '@nestjs/common';
import { Project } from './project.entity';
import { ProjectDto } from './dto/project.dto';

@EntityRepository(Project)
export class ProjectRepository extends Repository<Project>{

  async getProject(id: number): Promise<Project> {
    const project = await this.findOne(id)
    if (!project) {
      throw new NotFoundException()
    }
    return project
  }

  async getAllProjects(): Promise<Project[]> {
    const projects = this.find()
    return projects
  }

  async createProject(projectDto: ProjectDto): Promise<Project> {
    const {name, description} = projectDto
    const project = new Project()
    console.log(name, description)
    project.name = name
    project.description = description || null
    await project.save()
    return project
  }

  async deleteProject(id: number): Promise<Project> {
    const project = await this.getProject(id)
    await this.delete(project.id)
    return project
  }

  async updateProject(id, projectDto): Promise<Project> {
    const project = await this.getProject(id)
    const {name, description} = projectDto

    project.name = name || project.name
    project.description = description || project.description

    await this.save(project)
    return project
  }

}