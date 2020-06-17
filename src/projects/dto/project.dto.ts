import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class ProjectDto {
  @ApiProperty()
  @IsString()
  name: string

  @IsString()
  @ApiProperty({ required: false })
  @IsOptional()
  description?: string
}