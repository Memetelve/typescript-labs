
import express, { Request, Response, json } from 'express';

import { User } from '../models/user.model';
import { Order } from '../models/order.model'

import { users, orders } from './data'

import cors from 'cors';
const app = express();
const port = 3000;

app.use(cors());
app.use(json());

app.get('/', (req: Request, res: Response): void => {
  res.send('Hello, world!');
});

app.get('/users', (req: Request, res: Response): void => {
  res.json(users);
});

app.get('/user/:id', (req: Request, res: Response): void => {
  const { id } = req.params;
  const user: User = users.find((user: User) => user.id == Number(id)) as User;

  res.json(user);
});

app.get('/username/:name', (req: Request, res: Response): void => {
  const { name } = req.params;
  const user: User = users.filter((user: User) => user.name == name) as unknown as User;

  if (!user) {
    res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
});

app.post('/user', (req: Request, res: Response): void => {
  const { name, age } = req.body;
  const id: number = users.length + 1;
  const newUser: User = { id, name, age, status };
  users.push(newUser);
  res.json(newUser);
});

app.put('/user/:id', (req: Request, res: Response): void => {
  const { idd } = req.params;



  if (Object.keys(req.body).every((x: string) => x in ["name", "age"])) {
    res.status(400).json({ error: 'Unexpected params' });
  }

  const { name, age } = req.body;

  const index: number = users.findIndex((user: User) => user.id == Number(idd));
  if (index === -1) {
    res.status(404).json({ error: 'User not found' });
  }

  const id: number = Number(idd);

  const user: User = { id, name, age, status };
  users[index] = user;
  res.json(user);
});

app.delete('/user/:id', (req: Request, res: Response): void => {
  const { id } = req.params;
  const index: number = users.findIndex((user: User) => user.id == Number(id));

  if (index < 0) {
    res.status(404).json({ error: 'User not found' });
  }

  const user: User = users.splice(index, 1);
  res.json(user);
});

app.patch("user/:id", (req: Request, res: Response): void => {
  const { id } = req.params;
  const { name, age } = req.body;
  const index: number = users.findIndex((user: User) => user.id == Number(id));

  if (Object.keys(req.body).every((x: string) => x in ["name", "age"])) {
    res.status(400).json({ error: 'Unexpected params' });
  }

  if (index < 0) {
    res.status(404).json({ error: 'User not found' });
  }

  const user: User = users[index];
  user.name = name || user.name;
  user.age = age || user.age;

  res.json(user);
})

app.listen(port, () => {
  console.log(`Api listening on port ${port}`);
});
