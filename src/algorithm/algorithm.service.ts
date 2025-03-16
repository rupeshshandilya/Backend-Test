import { Injectable } from '@nestjs/common';
import { LoggerService } from 'src/logger/logger.service';

@Injectable()
export class AlgorithmService {
  constructor(private readonly loggerService: LoggerService) {}

  /**
   * Performs a binary search on a sorted array to find the target value.
   * Logs the execution details using the logger service.
   *
   * @param inputArray - The sorted array in which to search
   * @param target - The value to find
   * @returns The index of the target value if found, otherwise -1
   */
  binarySearch(inputArray: number[], target: number) {
    try {
      // Ensure input array is sorted
      const isSorted = inputArray.every(
        (val, i, arr) => i === 0 || arr[i - 1] <= val,
      );

      if (!isSorted) {
        throw new Error('Input array must be sorted in ascending order');
      }

      let startIndex = 0;
      let endIndex = inputArray.length - 1;
      let output = -1;

      while (startIndex <= endIndex) {
        let midIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

        if (inputArray[midIndex] === target) {
          output = midIndex;
          break;
        }

        if (inputArray[midIndex] < target) {
          startIndex = midIndex + 1;
        } else {
          endIndex = midIndex - 1;
        }
      }

      // Log algorithm execution details
      this.loggerService.logAlgorithmExecution(
        'Binary Search',
        { array: inputArray, target },
        { index: output },
      );

      return output;
    } catch (error) {
      throw new Error(`Binary Search failed: ${error.message}`);
    }
  }

  /**
   * Sorts an array using the Quick Sort algorithm.
   * Logs the sorted output using the logger service.
   *
   * @param inputArray - The array to be sorted
   * @returns The sorted array
   */
  quickSort(inputArray: number[]) {
    try {
      if (inputArray.length === 0) {
        return [];
      }

      this.quickSortHelper(inputArray, 0, inputArray.length - 1);

      // Log algorithm execution details
      this.loggerService.logAlgorithmExecution(
        'Quick Sorts',
        { array: inputArray },
        { sortedArray: [...inputArray] },
      );

      return inputArray;
    } catch (error) {
      throw new Error(`Quick Sort failed: ${error.message}`);
    }
  }

  /**
   * Recursively sorts an array using the Quick Sort algorithm.
   *
   * @param inputArray - The array to be sorted
   * @param startIndex - The starting index of the sorting range
   * @param endIndex - The ending index of the sorting range
   */
  private quickSortHelper(
    inputArray: number[],
    startIndex: number,
    endIndex: number,
  ): void {
    if (startIndex >= endIndex) {
      return;
    }

    // Find pivot index and partition the array
    let pivotIndex: number = this.findPivotIndex(
      inputArray,
      startIndex,
      endIndex,
    );

    // Recursively sort the left and right partitions
    this.quickSortHelper(inputArray, startIndex, pivotIndex - 1);
    this.quickSortHelper(inputArray, pivotIndex + 1, endIndex);
  }

  /**
   * Finds the pivot index for Quick Sort and partitions the array around it.
   *
   * @param inputArray - The array to partition
   * @param startIndex - The starting index of the range
   * @param endIndex - The ending index of the range
   * @returns The index of the pivot element
   */
  private findPivotIndex(
    inputArray: number[],
    startIndex: number,
    endIndex: number,
  ): number {
    let pivot: number = inputArray[startIndex];
    let count: number = 0;

    // Count elements smaller than or equal to the pivot
    for (let index = startIndex + 1; index <= endIndex; index++) {
      if (inputArray[index] <= pivot) {
        count++;
      }
    }

    // Move pivot to its correct position
    let pivotIndex = startIndex + count;
    [inputArray[pivotIndex], inputArray[startIndex]] = [
      inputArray[startIndex],
      inputArray[pivotIndex],
    ];

    let index1: number = startIndex;
    let index2: number = endIndex;

    // Partition the array around the pivot
    while (index1 < pivotIndex && index2 > pivotIndex) {
      while (inputArray[index1] <= pivot) {
        index1++;
      }
      while (inputArray[index2] > pivot) {
        index2--;
      }
      if (index1 < pivotIndex && index2 > pivotIndex) {
        [inputArray[index1], inputArray[index2]] = [
          inputArray[index2],
          inputArray[index1],
        ];
        index1++;
        index2--;
      }
    }
    return pivotIndex;
  }
}
