import { UserStatus } from "../enums/user-status.enum";

export interface User {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    dateOfBirth: Date;
    city: string;
    street: string;
    houseNumber?: number;
    status: UserStatus;
}
