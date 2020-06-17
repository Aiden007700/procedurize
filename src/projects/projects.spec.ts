import { Test } from '@nestjs/testing';
import { ProjectsService } from './projects.service';
import { ProjectRepository } from './project.repository';

const mockUser = {
  id: 1,
  email: 'testuser@gmail.com',
}

const mockProjectReposetory = () => ({
  getProject: jest.fn(),
});

describe('ProjectsService', () => {
  let projectService;
  let projectRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ProjectsService,
        { provide: ProjectRepository, useFactory: mockProjectReposetory },
      ],
    }).compile();

    projectService = await module.get(ProjectsService);
    projectRepository = await module.get<ProjectRepository>(ProjectRepository);
  });

  describe('getProject', () => {
    it('gets all projects from the repository', async () => {
      projectRepository.getProject.mockResolvedValue('some Value')

      expect(projectRepository.getProject).not.toHaveBeenCalled()

      const result = await projectRepository.getProject(mockUser);
      expect(projectRepository.getProject).toHaveBeenCalled()
      expect(result).toEqual('some Value')
    })
  })
});
