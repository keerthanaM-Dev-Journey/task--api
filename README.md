# Task API Backend

This is a simple backend API built using Node.js and Express.js.

## Technologies Used
- Node.js
- Express.js
- Postman for API testing

## API Endpoints

### 1. Get All todos
GET /todos

Description:
Returns all todos stored in the server.

Example:
http://localhost:3000/todos

---

### 2. Create a todos
POST /todos

Description:
Adds a new todos.

Body (JSON):

{
 "title": "Complete backend project"
}

---

### 3. Delete a todos
DELETE /todos/:id

Description:
Deletes a todos using its ID.

Example:
http://localhost:3000/todos/1

---

## How to Run the Project

1. Install dependencies
npm install

2. Start the server
node server.js

3. Test APIs using Postman

Server runs on:
http://localhost:3000