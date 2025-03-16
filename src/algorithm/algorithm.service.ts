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

  /**
   * Performs a Breadth-First Search (BFS) traversal on a graph.
   * Traverses all connected components and logs the traversal order.
   *
   * @param adj - Adjacency list representation of the graph
   * @returns An array representing the BFS traversal order
   */
  bfsTraversal(adj: number[][]): number[] {
    try {
      // Validate input: Check if the adjacency list is a valid non-empty array
      if (!Array.isArray(adj) || adj.length === 0) {
        throw new Error('Invalid adjacency list: Graph cannot be empty');
      }

      // Number of vertices in the graph
      const V = adj.length;

      // Stores BFS traversal order
      const res: number[] = [];

      const visited = new Array(V).fill(false);

      // Perform BFS for every unvisited node
      for (let i = 0; i < V; i++) {
        if (!visited[i]) {
          this.bfsOfGraph(adj, i, visited, res);
        }
      }

      // Log algorithm execution details
      this.loggerService.logAlgorithmExecution(
        'Breadth-First Search (BFS)',
        { graph: adj },
        { traversalOrder: res },
      );

      return res;
    } catch (error) {
      throw new Error(`BFS Traversal failed: ${error.message}`);
    }
  }

  /**
   * BFS traversal from a given source node.
   *
   * @param adj - Adjacency list representation of the graph
   * @param s - The starting node for BFS traversal
   * @param visited - Array to track visited nodes
   * @param res - Stores the BFS traversal order
   */
  private bfsOfGraph(
    adj: number[][],
    s: number,
    visited: boolean[],
    res: number[],
  ) {
    // Queue for BFS traversal
    const queue: number[] = [];
    visited[s] = true;
    queue.push(s);

    while (queue.length > 0) {
      // Dequeue a node
      const curr = queue.shift()!;
      res.push(curr);

      // Visit all unvisited adjacent nodes
      for (const neighbor of adj[curr]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
  }
}
