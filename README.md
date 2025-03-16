<p align="center">
    <span style="font-size: 48px; font-weight: bold;">Digantara Backend Test </span>
</p>

## Description
Digantara Test is a backend application built with NestJS, Prisma ORM, and PostgreSQL. It provides APIs for executing algorithms like Quick Sort, Binary Search, and Breadth-First Search (BFS), while logging each API call with algorithm name, input, and output for tracking and analysis. The project follows a modular structure for scalability and maintainability

## Base URL
```bash
https://backend-test-3qks.onrender.com
```

## Design Decision

This section explains the key design choices made while developing this Algorithm Execution Logger project using NestJS, Prisma, and PostgreSQL.

#### **Architecture**
The project follows a modular architecture, making it scalable and maintainable.

- **Algorithm Module**: Handles algorithm execution logic (Binary Search, Quick Sort & BFS).
- **Logger Module**: Centralized logging service to track executed algorithms.
- **Prisma ORM**: Provides efficient database interactions with PostgreSQL.
- **DTOs & Validation**: Ensures API input is well-structured using class-validator.
#### **Why NestJS?**
NestJS was chosen due to its:
- Modular structure for better organization.
- Dependency Injection (DI) for easy service management.
- Built-in validation & exception handling for robust APIs.

#### **Algorithm Execution & Logging**
Each algorithm execution is logged with:

- **Algorithm Name** – Identifies the executed algorithm.
- **Input Data** – Captures input parameters for traceability.
- **Output Data** – Stores the algorithm’s computed result.
- **Timestamp** – Enables historical tracking.
#### **Why Prisma + PostgreSQL?**
-  Prisma ORM simplifies database queries and migration management.
- PostgreSQL is chosen for its scalability, reliability, and support for JSON storage.

**Prisma Schema Design**
```bash
model AlgorithmLog {
  id            String   @id @default(uuid())
  algorithmName String
  input         Json
  output        Json
  createdAt     DateTime @default(now())

  @@index([algorithmName])
  @@index([createdAt])
}
```

- Indexes on ```algorithmName``` & ```createdAt``` for faster query performance.
- JSON storage for ```input``` & ```output``` to maintain flexibility in logging various algorithms.

#### **Error Handling & Validation**
**Why Class-Validator?**

Ensures API inputs are structured and prevent invalid data from reaching the service.


```bash
@IsArray()
@IsNotEmpty({ message: 'Input array should not be empty' })
@IsNumber({}, { each: true })
inputArray: number[];
```
- Prevents empty/incorrect arrays from being processed.
- Ensures target in Binary Search is a valid number.



## API Reference

 #### Algorithm APIs

##### Binary Search

```
  POST /algorithm/binary-search
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `inputArray` | `number[]` | **Required**. A sorted array of numbers. |
| `target` | `number` | **Required**. The value to search for. |

- Returns the index of the target value if found, otherwise -1.

**Request Body:**
```json
{
  "inputArray": [1, 3, 5, 7, 9],
  "target": 5
}
```
**Response:**
```json
{
  "algorithmName": "binary-search",
  "input": { "inputArray": [1, 3, 5, 7, 9], "target": 5 },
  "output": 2,
  "createdAt": "2025-03-16T12:34:56.789Z"
}
```

#### Quick Sort

```
  POST /algorithm/quick-sort
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `inputArray`      | `number[]` | **Required**. The array to be sorted. |

- Returns the sorted array using the Quick Sort algorithm


**Request Body:**
```json
{
  "inputArray": [9, 3, 7, 1, 5]
}
```
**Response:**
```json
{
  "algorithmName": "Quick Sort",
  "input": { "inputArray": [9, 3, 7, 1, 5] },
  "output": [1, 3, 5, 7, 9],
  "createdAt": "2025-03-16T12:35:10.123Z"
}
```

#### Breadth-First Search (BFS)

```
  POST /algorithm/bfs
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `adjacencyList`      | `number[][]` | **Required**. The adjacency list representation of the graph. |

- Returns the BFS traversal order of the graph.

**Request Body:**
```json
{
  "adjacencyList": [ [2, 3, 1], [0],
    [0, 4], [0], [2]],
}
```
**Response:**
```json
{
  "algorithmName": "BFS",
  "input": { "adjacencyList": { [ [2, 3, 1], [0],
    [0, 4], [0], [2]] },
  "output": [0 2 3 1 4 ],
  "createdAt": "2025-03-16T12:36:20.567Z"
}
```

#### Logger APIs

#### GET ALL LOGS

```
  GET /logger
```
- Retrieves all logs of algorithm executions.

**Response:**
```json
[
  {
    "id": "8eb4a2ef-a608-449a-9c6d-1aef52c69e44",
    "algorithmName": "binary-search",
    "input": {
      "array": [10,20,30,40,50,60],
      "target": 50
    },
    "output": {
      "index": 4
    },
    "createdAt": "2025-03-16T22:02:03.459Z"
  }
]
```

#### Get Logs by Algorithm Name

```
  GET /logger/:algorithmName
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `algorithmName`      | `string` | **Required**. Name of the algorithm to filter logs. |

- Returns logs of executions filtered by the algorithm name.

**Response:**
```json
[
  {
    "id": "d35bf7d7-c55c-44bb-bbbc-8fc826b5e4c0",
    "algorithmName": "binary-search",
    "input": {
      "array": [10,20,30,40,50,60],
      "target": 50
    },
    "output": {
      "index": 4
    },
    "createdAt": "2025-03-16T22:46:57.986Z"
  }
]
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`DATABASE_URL`

##  Installation  

### **1. Clone the Repository**  

```bash
git clone https://github.com/rupeshshandilya/Backend-Test.git
cd digantara-test
```

### **2. Install Dependencies**

```bash
npm install
or
yarn install
```

## **3. Configure Prisma**

#### **4.1. Generate Prisma Client**
```bash
npx prisma generate
```

#### **4.2. Run Database Migrations**
```bash
npx prisma migrate dev --name init
```

#### **4.3. Open Prisma Studio (Optional - View Database Records)**
```bash
npx prisma studio
```

### **5. Start the Server**
```bash
npm run start:dev
```
