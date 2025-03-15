import { Injectable } from '@nestjs/common';
import { LoggerService } from 'src/logger/logger.service';

@Injectable()
export class AlgorithmService {
  constructor(private readonly loggerService: LoggerService) {}

  binarySearch(inputArray: number[], target: number) {
    try {
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

  //   Quick Sort Algo
  quickSort(inputArray: number[]) {
    try {
      if (inputArray.length === 0) {
        return [];
      }

      this.quickSortHelper(inputArray, 0, inputArray.length - 1);

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

  private quickSortHelper(
    inputArray: number[],
    startIndex: number,
    endIndex: number,
  ): void {
    if (startIndex >= endIndex) {
      return;
    }

    let pivotIndex: number = this.findPivotIndex(
      inputArray,
      startIndex,
      endIndex,
    );

    // Sort left and right partitions
    this.quickSortHelper(inputArray, startIndex, pivotIndex - 1);
    this.quickSortHelper(inputArray, pivotIndex + 1, endIndex);
  }

  private findPivotIndex(
    inputArray: number[],
    startIndex: number,
    endIndex: number,
  ): number {
    let pivot: number = inputArray[startIndex];
    let count: number = 0;

    // Find the number of values less than the pivot
    for (let index = startIndex + 1; index <= endIndex; index++) {
      if (inputArray[index] <= pivot) {
        count++;
      }
    }

    let pivotIndex = startIndex + count;
    [inputArray[pivotIndex], inputArray[startIndex]] = [
      inputArray[startIndex],
      inputArray[pivotIndex],
    ];

    let index1: number = startIndex;
    let index2: number = endIndex;

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
