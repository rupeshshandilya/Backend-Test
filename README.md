<p align="center">
    <span style="font-size: 48px; font-weight: bold;">Digantara Backend Test </span>
</p>

## Description
Digantara Test is a backend application built with NestJS, Prisma ORM, and PostgreSQL. It provides APIs for executing algorithms like Quick Sort, Binary Search and Breadth First Search, while logging each API call with algorithm name, input, and output for tracking and analysis. The project follows a modular structure for scalability and maintainability


## Design Decision

This section explains the key design choices made while developing this Algorithm Execution Logger project using NestJS, Prisma, and PostgreSQL.

#### **Architecture**
The project follows a modular architecture, making it scalable and maintainable.

- **Algorithm Module**: Handles algorithm execution logic (Binary Search & Quick Sort).
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

#### Quick Sort

```
  POST /algorithm/quick-sort
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `inputArray`      | `number[]` | **Required**. The array to be sorted. |

- Returns the sorted array using the Quick Sort algorithm

#### Logger APIs

#### GET ALL LOGS

```
  GET /logger
```
- Retrieves all logs of algorithm executions.

#### Get Logs by Algorithm Name

```
  GET /logger/:algorithmName
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `algorithmName`      | `string` | **Required**. Name of the algorithm to filter logs. |

- Returns logs of executions filtered by the algorithm name.
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`DATABASE_URL`

##  Installation  

### **1. Clone the Repository**  

```bash
git clone https://github.com/your-username/digantara-test.git
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
