# Employee Management API

This project is a CRUD (Create, Read, Update, Delete) API for managing employee records using Node.js, Express, and MongoDB.

## Features

- Create a new employee
- Retrieve all employees
- Retrieve a single employee by ID
- Update employee details
- Delete an employee

## Prerequisites

Ensure you have the following installed:

- Node.js (v14 or higher)
- MongoDB (local or cloud-based, e.g., MongoDB Atlas)

## Installation

### 1. Clone the repository

bash
git clone https://github.com/your-username/employee-management-api.git
cd employee-management-api


### 2. Install dependencies

bash
npm install


### 3. Set up MongoDB

Use a local MongoDB instance or create a MongoDB Atlas database.

Update the MongoDB connection URI in your main file (e.g., server.js).

### 4. Run the server

bash
npm start


The API will start on http://localhost:5000 (or the specified port).

## API Endpoints

### 1. Create a New Employee

*POST* /api/employees/create

#### Request Body (JSON):

json
{
  "name": "John Doe",
  "dob": "1990-05-15",
  "age": 34,
  "department": "IT",
  "position": "Software Engineer",
  "email": "johndoe@example.com",
  "phoneNumber": "1234567890",
  "salary": 70000,
  "joiningDate": "2023-06-01"
}


#### Response:

json
{
  "message": "✅ Employee Created Successfully",
  "employee": { ... }
}


---

### 2. Get All Employees

*GET* /api/employees/get

#### Response:

json
[
  {
    "_id": "65a8b5f60c44a35b12cd784a",
    "name": "John Doe",
    "dob": "1990-05-15",
    "age": 34,
    "department": "IT",
    "position": "Software Engineer",
    "email": "johndoe@example.com",
    "phoneNumber": "1234567890",
    "salary": 70000,
    "joiningDate": "2023-06-01"
  }
]


---

### 3. Get a Single Employee by ID

*GET* /api/employees/get/:id

---

### 4. Update Employee Details

*PUT* /api/employees/update/:id

#### Request Body (JSON):

json
{
  "position": "Senior Software Engineer",
  "salary": 85000
}


#### Response:

200 OK - Employee updated successfully

---

### 5. Delete an Employee

*DELETE* /api/employees/delete/:id

#### Response:

200 OK - Employee deleted successfully

---

## Project Structure


employee-management-api/
│── models/
│   ├── employee.js      # Mongoose model for Employee
│── routes/
│   ├── employees.js     # Express routes for CRUD operations
│── server.js           # Main server file
│── package.json        # Dependencies and scripts
│── README.md           # Documentation


## Dependencies

- Express - Web framework for Node.js
- Mongoose - ODM for MongoDB
- Nodemon (for development)

## License

This project is open-source and available under the MIT License.
