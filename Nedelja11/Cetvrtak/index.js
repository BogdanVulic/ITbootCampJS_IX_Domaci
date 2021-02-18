
// Рута за читање целог низа
// Рута за читање једног елемента (по id)
// Рута за брисање једног елемента (по id)
// Рута за додавање елемента
// Рута за мењање елемента (по id)

import express from 'express';

const app = express();
app.use(express.json());

const PORT = 3003;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

const todos = [
    {
        task: 'sdfjnsdkf',
        done: true,
        id: 0
    },
    {
        task: 'aaaaaaaaaaa',
        done: true,
        id: 1
    },
    {
        task: 'eeeeeeeeeee',
        done: false,
        id: 2
    }
]

app.get('/todos', (req, res) => {
    res.json(todos);
    res.status(200);
})
app.get('/todos/:id', (req, res) => {
    todos.find(todo => todo.id == req.params.id) ? res.json(todos.find(todo => todo.id == req.params.id)) : res.status(404).end();
})
app.delete('/todos/:id', (req, res) => {
    todos = todos.filter(todo => todo.id != req.params.id);
})
app.post('/todos', (req, res) => {
    const id = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const todo = request.body;
    todo.id = Number(id);
    todos.push(todo);
    response.status(201).end();
})
app.patch('/todos/:id', (req, res) => {
    todos.splice(todos.findIndex(todo => todo.id == req.params.id), 1, {...req.body, id: req.params.id});
    res.json(req.body);
})