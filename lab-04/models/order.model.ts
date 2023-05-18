import { User } from './user.model'

export interface Order {
    productName: string,
    quantity: number,
    price: number,
    customer: User
}