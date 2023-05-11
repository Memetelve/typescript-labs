import express, { json } from 'express';
import cors from 'cors';
const app = express();
const port = 3000;

app.use(cors());
app.use(json());

const users = [
    { id: 1, name: 'Miguel', age: 22 },
    { id: 2, name: 'Juan', age: 23 },
    { id: 3, name: 'Pedro', age: 24 },
    { id: 4, name: 'Luis', age: 25 },
    { id: 5, name: 'Carlos', age: 26 },
    { id: 6, name: 'Andres', age: 27 },
    { id: 7, name: 'Jorge', age: 28 },
    { id: 8, name: 'Jose', age: 29 },
    { id: 9, name: 'Ricardo', age: 30 },
    { id: 10, name: 'Miguel', age: 31 },
    { id: 11, name: 'Juan', age: 32 },
    { id: 12, name: 'Pedro', age: 33 },
    { id: 13, name: 'Luis', age: 34 },
    { id: 14, name: 'Carlos', age: 26 },

]


app.get('/', (req, res) => {
    res.header('Date', "xDD")
    res.send('Hello, world!', 418);
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/user/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find(user => user.id == id);
    res.json(user);
});

app.get('/username/:name/:limit?', (req, res) => {
    let { name, limit } = req.params;

    if (!limit) {
        limit = 1;
    }

    const user = users.filter(user => user.name == name).splice(0, limit);
    res.json(user);
});

app.post('/user', (req, res) => {
    const { name, age } = req.body;
    const id = users.length + 1;
    const newUser = { id, name, age };
    users.push(newUser);
    res.json(newUser);
});

app.put('/user/:id', (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;
    const index = users.findIndex(user => user.id == id);
    const user = { id, name, age };
    users[index] = user;
    res.json(user);
});

app.delete('/user/:id', (req, res) => {
    const { id } = req.params;
    const index = users.findIndex(user => user.id == id);
    const user = users.splice(index, 1);
    res.json(user);
});


app.listen(port, () => {
    console.log(`Api listening on port ${port}`);
});
