import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';

/**
 * DTO for algorithms that require an input array.
 */
export class AlgorithmDto {
  /**
   * The array to be processed by the algorithm.
   * Must be a non-empty array of numbers.
   */
  @IsArray()
  @IsNotEmpty({ message: 'Input array should not be empty' })
  @IsNumber({}, { each: true })
  inputArray: number[];
}

/**
 * DTO for Binary Search algorithm, extending AlgorithmDto.
 * Includes an additional target value to search for.
 */
export class BinarySearchDto extends AlgorithmDto {
  /**
   * The target number to find in the input array.
   * Must be a valid number and cannot be empty.
   */
  @IsNumber()
  @IsNotEmpty({ message: 'Target value is required' })
  target: number;
}

/**
 * DTO for BFS algorithm, representing an adjacency list graph.
 */
export class BfsDto {
  /**
   * The adjacency list representation of the graph.
   * Each index represents a node, and its value is an array of connected nodes.
   */
  @IsArray()
  @IsNotEmpty({ message: 'Adjacency list cannot be empty' })
  adjacencyList: number[][];
}
