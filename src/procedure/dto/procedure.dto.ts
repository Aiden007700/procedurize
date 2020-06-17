import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, Min } from 'class-validator';

export class ProcedureDto {

  @IsInt()
  @ApiProperty()
  projectId: number

  @ApiProperty()
  @IsString()
  name: string

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  description?: string

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  observation?: string

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  hypothesis?: string

  @ApiProperty()
  @IsInt()
  @Min(0)
  orderSequence: number
}