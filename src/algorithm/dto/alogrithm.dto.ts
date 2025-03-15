import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';

export class AlgorithmDto {
  @IsArray()
  @IsNotEmpty({ message: 'Input array should not be empty' })
  @IsNumber({}, { each: true })
  inputArray: number[];
}

export class BinarySearchDto extends AlgorithmDto {
    @IsNumber()
    @IsNotEmpty({ message: 'Target value is required' })
    target: number;
}
