<p align="center">
    <span style="font-size: 48px; font-weight: bold;">Digantara Backend Test </span>
</p>

## Description
Digantara Test is a backend application built with NestJS, Prisma ORM, and PostgreSQL. It provides APIs for executing algorithms like Quick Sort, Binary Search and Breadth First Search, while logging each API call with algorithm name, input, and output for tracking and analysis. The project follows a modular structure for scalability and maintainability


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
  GET /logger/by-name
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
