import { User } from '../models/user.model';
import { Order } from '../models/order.model'

export const users: User[] = [
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

export const orders: Order[] = [
    { productName: "Jabłko", quantity: 3, price: 1.99, customer: users[0] }
]