import { ApiProperty } from '@nestjs/swagger';

export class ProcedureDto {

  @ApiProperty()
  projectId: number
  @ApiProperty()
  name: string
  @ApiProperty({ required: false })
  description?: string
  @ApiProperty({ required: false })
  observation?: string
  @ApiProperty({ required: false })
  hypothesis?: string
  @ApiProperty()
  orderSequence: number
}