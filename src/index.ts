import { User } from '../models/user.model';
import { UserStatus } from '../enums/user-status.enum';

// const x: string= "Hello World";
// console.log(x);

// let y: string | number | boolean = true;

// console.log(typeof y);

// const c: string = x + y;
// console.log(c);


const arr: number[] = [1, 2];
const arr3: (number|string)[] = [1, "a", 3, 4, 5];
const arr2: Array<number> = [1, 2, 3, 4, 5];


function fn1(a: number, b: number): number {
    return a + b;
}

function fn2(a: number, b: number): string {
    return "Wynik: " + (a + b);
}

function fn3(a: number, b: number): void {
    console.log(a + b);
}

function fn4(status: any): void|string {
    switch (status) {
        case 1:
            return "one";
        default:
            break;
    }
}


// console.log(arr2.map((item: number) => item * 2));

// console.log(arr2.filter((item) => item > 2));

// const res: string = arr2.reduce((acc: string, val: number) => {
//     return acc + `${val}`;
// }), "");



const user: User = {
    firstName: "Jan",
    lastName: "Kowalski",
    age: 20,
    city: "Warszawa",
    email: "ja@ty.com",
    dateOfBirth: new Date(),
    street: "Kwiatowa",
    houseNumber: 1,
    status: UserStatus.PENDING
}

console.log(user.firstName);
console.log(user.dateOfBirth);
console.log(user.status);

