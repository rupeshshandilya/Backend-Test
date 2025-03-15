import { IsString, IsNotEmpty } from 'class-validator';

/**
 * DTO for retrieving logs based on the algorithm name.
 * Ensures that the provided algorithm name is valid.
 */
export class GetLogsDto {
  /**
   * The name of the algorithm whose logs are being requested.
   * Must be a non-empty string.
   */
  @IsString()
  @IsNotEmpty()
  algorithmName: string;
}
