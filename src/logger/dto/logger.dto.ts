import { IsString, IsNotEmpty } from 'class-validator';

export class GetLogsDto {
  @IsString()
  @IsNotEmpty()
  algorithmName: string;
}
