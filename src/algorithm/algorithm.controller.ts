import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AlgorithmDto, BinarySearchDto } from './dto/alogrithm.dto';
import { AlgorithmService } from './algorithm.service';

// Routes
@Controller('algorithm')
export class AlgorithmController {
  constructor(private readonly algorithmService: AlgorithmService) {}

  @Post('binary-search')
  @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
  binarySearch(@Body() binarySearchDto: BinarySearchDto) {
    const { inputArray, target } = binarySearchDto;

    return {result: this.algorithmService.binarySearch(inputArray, target)};
  }

  @Post('quick-sort')
  @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
  quickSort(@Body() algorithmDto: AlgorithmDto) {
    const { inputArray } = algorithmDto;

    return { result: this.algorithmService.quickSort(inputArray) };
  }
}
