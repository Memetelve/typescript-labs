import express, { json } from 'express';
import cors from 'cors';
const app = express();
const port = 3000;

app.use(cors());
app.use(json());

const users = [
    { id: 1, name: 'Miguel', age: 22, status: "active" },
    { id: 2, name: 'Juan', age: 23, status: "active" },
    { id: 3, name: 'Pedro', age: 24, status: "active" },
    { id: 4, name: 'Luis', age: 25, status: "active" },
    { id: 5, name: 'Carlos', age: 26, status: "active" },
    { id: 6, name: 'Andres', age: 27, status: "active" },
    { id: 7, name: 'Jorge', age: 28, status: "active" },
    { id: 8, name: 'Jose', age: 29, status: "active" },
    { id: 9, name: 'Ricardo', age: 30, status: "active" },
    { id: 10, name: 'Miguel', age: 31, status: "active" },
    { id: 11, name: 'Juan', age: 32, status: "active" },
    { id: 12, name: 'Pedro', age: 33, status: "active" },
    { id: 13, name: 'Luis', age: 34, status: "active" },
    { id: 14, name: 'Carlos', age: 26, status: "active" }
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

    if (!user) {
        res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
});

app.get('/username/:name/:limit?', (req, res) => {
    let { name, limit } = req.params;

    if (!user) {
        res.status(404).json({ error: 'User not found' });
    }

    limit = limit || 1;

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

    if (Object.keys(req.body).every(x => x in ["name", "age"])) {
        res.status(400).json({ error: 'Unexpected params' });
    }

    const { name, age } = req.body;

    const index = users.findIndex(user => user.id == id);
    if (!user) {
        res.status(404).json({ error: 'User not found' });
    }

    const user = { id, name, age };
    users[index] = user;
    res.json(user);
});

app.delete('/user/:id', (req, res) => {
    const { id } = req.params;
    const index = users.findIndex(user => user.id == id);

    if (index < 0) {
        res.status(404).json({ error: 'User not found' });
    }

    const user = users.splice(index, 1);
    res.json(user);
});

app.patch("user/:id", (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;
    const index = users.findIndex(user => user.id == id);

    if (Object.keys(req.body).every(x => x in ["name", "age"])) {
        res.status(400).json({ error: 'Unexpected params' });
    }

    if (index < 0) {
        res.status(404).json({ error: 'User not found' });
    }

    const user = users[index];
    user.name = name || user.name;
    user.age = age || user.age;

    res.json(user);
})

app.listen(port, () => {
    console.log(`Api listening on port ${port}`);
});
