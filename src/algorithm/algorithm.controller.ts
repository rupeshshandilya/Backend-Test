import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';
import { AlgorithmDto, BinarySearchDto } from './dto/alogrithm.dto';
import { AlgorithmService } from './algorithm.service';

/**
 * Controller to handle algorithm-related API requests.
 */
@Controller('algorithm')
export class AlgorithmController {
  constructor(private readonly algorithmService: AlgorithmService) {}

  /**
   * Endpoint to perform a binary search on a sorted array.
   *
   * @param binarySearchDto - DTO containing the sorted array and target value
   * @returns The index of the target value if found, otherwise -1
   */
  @Post('binary-search')
  binarySearch(@Body() binarySearchDto: BinarySearchDto) {
    const { inputArray, target } = binarySearchDto;

    return { result: this.algorithmService.binarySearch(inputArray, target) };
  }

  /**
   * Endpoint to sort an array using the Quick Sort algorithm.
   *
   * @param algorithmDto - DTO containing the array to be sorted
   * @returns The sorted array
   */
  @Post('quick-sort')
  quickSort(@Body() algorithmDto: AlgorithmDto) {
    const { inputArray } = algorithmDto;

    return { result: this.algorithmService.quickSort(inputArray) };
  }
}
