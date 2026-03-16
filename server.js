const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Temporary database
let todos = [];
let idCounter = 1;

// Root Route
app.get('/', (req, res) => {
  res.json({
    message: "Welcome to Todo API",
    version: "1.0"
  });
});

// Get All Todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Create Todo
app.post('/todos', (req, res) => {

  if (!req.body || !req.body.title) {
    return res.status(400).json({
      error: "Title is required"
    });
  }

  const newTodo = {
    id: idCounter++,
    title: req.body.title,
    completed: false,
    createdAt: new Date()
  };

  todos.push(newTodo);

  res.status(201).json(newTodo);
});

// Get Single Todo
app.get('/todos/:id', (req, res) => {

  const id = parseInt(req.params.id);

  const todo = todos.find(t => t.id === id);

  if (!todo) {
    return res.status(404).json({
      error: "Todo not found"
    });
  }

  res.json(todo);
});

// Update Todo
app.put('/todos/:id', (req, res) => {

  const id = parseInt(req.params.id);

  const todo = todos.find(t => t.id === id);

  if (!todo) {
    return res.status(404).json({
      error: "Todo not found"
    });
  }

  if (req.body && req.body.title !== undefined) {
    todo.title = req.body.title;
  }

  if (req.body && req.body.completed !== undefined) {
    todo.completed = req.body.completed;
  }

  res.json(todo);
});

// Delete Todo
app.delete('/todos/:id', (req, res) => {

  const id = parseInt(req.params.id);

  const index = todos.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: "Todo not found"
    });
  }

  const deletedTodo = todos.splice(index, 1);

  res.json({
    message: "Todo deleted successfully",
    todo: deletedTodo[0]
  });

});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});