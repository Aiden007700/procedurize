import { ApiProperty } from '@nestjs/swagger';

export class ProjectDto {
  @ApiProperty()
  name: string
  @ApiProperty({ required: false })
  description?: string
}