console.log('Hello, World!');

let awesomeName: string = 'shakeAndBake';
awesomeName = 'something';
awesomeName = awesomeName.toUpperCase();
console.log(awesomeName);

// awesomeName = 20; // Error Not a string

let amount: number = 20;
amount = 12 - 1;
// amount = 'pants'; // Error Not a number

let amount_2 = 30; // Implicitly inferred as number!

let isAwesome: boolean = true;
isAwesome = false;
// isAwesome = 'pants'; // Error Not a boolean

let userName: string = 'my name';
console.log(userName.length);

let myNumber = 13;
myNumber = myNumber + amount;

let truthy = true;

if (truthy) {
  console.log('My number: ', myNumber);
}

// userName = 12; // Error
// myNumber = true; // Error
// truthy = undefined; // Error

//  Union types
let tax: number | string = 10;

tax = 100;
tax = '15$';

// Literal values
let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'success';
// requestStatus = 'random' // Error

let notSure: any = 4;
notSure = 'maybe a string';
notSure = false;

let random; // Type any by default

const books = ['1984', 'Brave New World', 'Fahrenheit 451'];

let foundBook: string | undefined;

for (let book of books) {
  if (book === '1984') {
    foundBook = book;
    foundBook = foundBook?.toUpperCase();
    break;
  }
}

console.log(foundBook);

// Arrays
let prices: number[] = [100, 75, 42];
// prices.push('hello'); // Error

// let randomValues:[] = ['hello']; // Error - The type is empty array and you can't assign anything in this array
let emptyValues = []; // This is an empty array of any type

// Objects
let car = {
  brand: 'Toyota',
  year: 2020,
};

let automobile: { brand: string; year: number } = {
  brand: 'Honda',
  year: 2023,
};

let book = { title: 'book', cost: 20 };
let pen = { title: 'pen', cost: 30 };
let notebook = { title: 'notebook' };
let items: { readonly title: string; cost?: number }[] = [book, pen, notebook]; // Cost is optional
// items[0].title = 'new book'; // Can't do that, because the property is readonly!

// Functions
function sayHi(name: string) {
  console.log(`Hello there ${name.toUpperCase()}`);
}

// type: any
// - config in tsconfig.json change "strict": true, to false
// set type to string

sayHi('john');

function addThree(number: any) {
  let anotherNumber: number = 4;
  return number + anotherNumber; // The return type is any, not a number!
}

// Challenge
let names: string[] = ['John', 'Jane', 'Anna'];

function isNameInList(name: string): boolean {
  return names.includes(name);
}

let nameToCheck = 'Jack';

if (isNameInList(nameToCheck)) {
  console.log(`${nameToCheck} is in the list`);
} else {
  console.log(`${nameToCheck} is not in the list`);
}

// Optional parameter
function calculatePrice(price: number, discount?: number): number {
  // return price - discount; // Error, possibly is undefined
  return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100, 20);

// Default parameter
function calculateScore(
  initialScore: number,
  penaltyPoints: number = 0
): number {
  return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calculateScore(100, 22);
let scoreWithoutPenalty = calculateScore(300); // Provide a default value in the parameter or use optional symbol ?

// rest
function sum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled);

  let total = numbers.reduce((previous, current) => {
    return previous + current;
  }, 0);
  return `${message}${total}`;
}

let result = sum('The total is: ', 1, 2, 3, 4, 5);
console.log(result);

// Void
function logMessage(message: string) {
  console.log(message);
}

logMessage('Hello, Typescript');

// Challenge
function processInput(stringOrNumber: string | number) {
  // Type guard

  if (typeof stringOrNumber === 'number') {
    console.log(stringOrNumber * 2);
  } else {
    console.log(stringOrNumber.toUpperCase());
  }
}

processInput(10);
processInput('Hello');

function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return { id, isActive: id % 2 === 0 };
}

const first = createEmployee({ id: 1 });
const second = createEmployee({ id: 2 });
console.log(first, second);

// alternative
function createStudent(student: { id: number; name: string }): void {
  console.log(`Welcome to the course ${student.name}`);
}

const newStudent = {
  id: 5,
  name: 'Anna',
};

createStudent(newStudent);

// Problem
createStudent({ id: 1, name: 'bob' }); // This is OK
createStudent({ id: 2, name: 'bobimeil', email: 'bobimeil@gmail.com' }); // This is NOT OK

const newStudent2 = {
  id: 5,
  name: 'AnnaMaria',
  email: 'anna@gmail.com',
};

createStudent(newStudent2); // This is not reported as a problem and it works!

// Challenge
function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number {
  if (typeof input === 'number') {
    return input * 2;
  } else {
    return config.reverse
      ? input.toUpperCase().split('').reverse().join('')
      : input.toUpperCase();
  }
}

console.log(processData(10));
console.log(processData('Hello'));
console.log(processData('Hello', { reverse: true }));

// Aliases
const john: { id: number; name: string; isActive: boolean } = {
  id: 1,
  name: 'john',
  isActive: true,
};
const susan: { id: number; name: string; isActive: boolean } = {
  id: 2,
  name: 'susan',
  isActive: false,
};

function createUser(user: { id: number; name: string; isActive: boolean }): {
  id: number;
  name: string;
  isActive: boolean;
} {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}

// Define an alias for the existing type:
type User = { id: number; name: string; isActive: boolean };

const jane: User = {
  id: 3,
  name: 'Jane',
  isActive: false,
};

function createANewUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}

createANewUser(jane);

// Challenge
type Employee = {
  id: number;
  name: string;
  department: string;
};

type Manager = {
  id: number;
  name: string;
  employees: Employee[];
};

type Staff = Employee | Manager;

function printStaffDetails(person: Staff) {
  if ('employees' in person) {
    console.log(
      `${person.name} is a manager and has ${person.employees.length} employees.`
    );
  } else {
    console.log(
      `${person.name} is an employee in the ${person.department} department.`
    );
  }
}

const alice: Employee = { id: 1, name: 'alice', department: 'Sales' };
const steve: Employee = { id: 2, name: 'steve', department: 'HR' };

const bob: Manager = { id: 3, name: 'bob', employees: [alice, steve] };

printStaffDetails(alice);
printStaffDetails(bob);

type Book = { id: number; name: string; price: number };

const book1: Book = {
  id: 1,
  name: 'how to',
  price: 15,
};

const book2: Book = {
  id: 2,
  name: 'It is how to',
  price: 17,
};

// const discountedBook: Book = {
//   id: 3,
//   name: 'This is the way',
//   price: 25,
//   discount: 0.15,
// }; // This one will not work, There is no discount property in the Book type.

// We can modify it:

const discountedBook: Book & { discount: number } = {
  id: 3,
  name: 'This is the way',
  price: 25,
  discount: 0.15,
};

// Computed properties
const propName = 'age';

type Animal = {
  [propName]: number;
};

let tiger: Animal = { [propName]: 5 };

// Interface - Fundamentals for Objects only
interface BookOne {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  // methods
  printAuthor(): void;
  printTitle(message: string): string;
}

const deepWork: BookOne = {
  isbn: 9781455586691,
  title: 'Deep Work',
  author: 'Cal Newport',
  genre: 'Self-help',
  printAuthor() {
    console.log(this.author);
  },
  printTitle(value) {
    console.log(`${this.title} ${value}`);
    return `${this.title} ${value}`;
  },
};

deepWork.title = 'New Title'; // allowed
// deepWork.isbn = 654321; // not allowed

deepWork.printAuthor();
deepWork.printTitle('is awesome.');

// Alternative methods
interface BookTwo {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  // method
  printAuthor(): void;
  printTitle(message: string): string;
  printSomething: (someValue: number) => number;
}

const deepWork2: BookTwo = {
  isbn: 9781455586691,
  title: 'Deep Work',
  author: 'Cal Newport',
  genre: 'Self-help',
  printAuthor() {
    console.log(this.author);
  },
  printTitle(value) {
    console.log(`${this.title} ${value}`);
    return `${this.title} ${value}`;
  },
  // First option
  // printSomething: function (someValue) {
  //   return someValue;
  // },
  // Second option
  // printSomething: (someValue) => {
  //   // console.log(this) // This will not work with arrow function. Instead do this:
  //   console.log(deepWork2.author);
  //   return someValue;
  // },
  // Third option
  printSomething(someValue) {
    return someValue;
  },
};

console.log(deepWork2.printSomething(34));

// Challenge
interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  upgradeRam(increase: number): number;
  storage?: number;
}

const laptop: Computer = {
  id: 1,
  brand: 'random brand',
  ram: 8,
  upgradeRam(amount) {
    this.ram += amount;
    return this.ram;
  },
};

laptop.storage = 256;
laptop.upgradeRam(4);
console.log('Laptop: ', laptop);

// Interfaces, extends, merge

interface Person {
  name: string;
  getDetails(): string;
}

interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}

// Merging (Reopen) the types. We can add properties to the interface
interface Person {
  age: number;
}

const person: Person = {
  name: 'John',
  age: 30,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
};

console.log(person.getDetails());

// Extending the interface
interface EmployeeOne extends Person {
  employeeId: number;
}

const employee = {
  name: 'Jane',
  age: 28,
  employeeId: 1234,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, EmployeeId: ${this.employeeId}`;
  },
};

console.log(employee.getDetails());

// Extends from multiple interfaces
interface ManagerOne extends Person, DogOwner {
  managePeople(): void;
}

const manager: ManagerOne = {
  name: 'Bob',
  age: 35,
  dogName: 'Rex',
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
  getDogDetails() {
    return `Dog Name is: ${this.name}`;
  },
  managePeople() {
    console.log('Managing people');
  },
};

manager.managePeople();

// Challenge
interface Persona {
  name: string;
}

interface DogOwner extends Persona {
  dogName: string;
}

interface ManagerTwo extends Persona {
  managePeople(): void;
  delegateTasks(): void;
}

const employeeTwo: Persona | DogOwner | ManagerTwo = getEmployee();

function getEmployee(): Persona | DogOwner | ManagerTwo {
  const random = Math.random();

  if (random < 0.33) {
    return {
      name: 'John',
    };
  } else if (random < 0.66) {
    return {
      name: 'Sarah',
      dogName: 'Rex',
    };
  } else {
    return {
      name: 'Bob',
      managePeople() {
        console.log('Managing people...');
      },
      delegateTasks() {
        console.log('Delegate tasks...');
      },
    };
  }
}

console.log('Random Persona: ', employeeTwo);

// With type guard
console.log('Employee name: ', employeeTwo.name); // Will work always, because the DogOwner and the ManagerTwo extends the Persona and they all have name.
// console.log(employeeTwo.delegateTasks); // Will not work always, but only when is the Manager type

function isManager(obj: Persona | DogOwner | ManagerTwo): boolean {
  return 'managePeople' in obj;
}

console.log(isManager(employeeTwo));

// details
// if (isManager(employee)) {
// employee.delegateTasks(); // Typescript complains, because the function returns a boolean and in a particular case it might be true, it does not signal to Typescript, that he employee is only Manager type.
// }

// To make it work, we have to change the return type of the function as follow:
function isManagerTwo(obj: Persona | DogOwner | ManagerTwo): obj is ManagerTwo {
  return 'managePeople' in obj;
}

if (isManagerTwo(employee)) {
  employee.delegateTasks();
}

// Difference between Interface and Type Alias

// Type aliases can represent primitive types, union types, intersection types, tuples, etc., while interfaces are primarily used to represent the shape of an object.

// Interfaces can be merged using declaration merging. If you define an interface with the same name more than once, TypeScript will merge their definitions. Type aliases can't be merged in this way.

// Interfaces can be implemented by classes, while type aliases cannot.

// Type aliases can use computed properties, while interfaces cannot.
const propName2 = 'age';

type Animal2 = {
  [propName2]: number;
};

let tiger2: Animal2 = { [propName]: 5 };
console.log('Tiger2: ', tiger2);

// Tuples
let person3: [string, number] = ['John', 25];
let date: [number, number, number] = [12, 18, 2001];
console.log(date);
// Gotcha
// We can use push method on the date:
date.push(34);
date.push(1234);
// All of these are available and Typescript will not complain
console.log(date);
// If we want to keep the type limited just to 3 numbers, use readonly
let date2: readonly [number, number, number] = [12, 28, 2002];
console.log(date);

// date2.push(35); // Error!

function getPerson(): [string, number] {
  return ['john', 25];
}

let randomPerson = getPerson();
console.log(randomPerson[0]);
console.log(randomPerson[1]);

// Optional property in tuple
let susan2: [string, number?] = ['susan'];

// Enums
enum ServerResponseStatus {
  Success,
  Error,
}

// By default the first property of the tuple has the value of 0, then the second has value of 1 and etc.
console.log(ServerResponseStatus);

// We can re assigned the values
enum ServerResponseStatus2 {
  Success = 200,
  Error = 500,
}

console.log(ServerResponseStatus2);

// When we reassigned the values we are getting four properties instead of two. See the log below
Object.values(ServerResponseStatus2).forEach((value) => {
  console.log(value);
});

// If we make the changes:
enum ServerResponseStatus3 {
  Success = 'Success',
  Error = 'Error',
}

// We are getting just the two values:
console.log(ServerResponseStatus3);

// Another way to fix the issue is with type guard

enum ServerResponseStatus4 {
  Success = 200,
  Error = 500,
}

Object.values(ServerResponseStatus4).forEach((value) => {
  if (typeof value === 'number') console.log(value);
});

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    data: ['Data'],
  };
}

const response: ServerResponse = getServerResponse();
console.log(response);

// Challenge

enum UserRole {
  Admin,
  Manage,
  Employee,
}

type UserThree = {
  id: number;
  name: string;
  role: UserRole;
  contact: [string, string];
};

function createUserThree(user: UserThree): UserThree {
  return user;
}

const user3: UserThree = createUserThree({
  id: 1,
  name: 'John Doe',
  role: UserRole.Admin,
  contact: ['john@mail.com', '123-456-789'],
});

console.log(user3);

// Assertion
let someValue: any = 'This is a string';

// Using type assertion to treat 'someValue' as a string
let strLength: number = (someValue as string).length;

type Bird = {
  name: string;
};

// Assume we have a JSON string from an API or local file
let birdString = '{"name": "Eagle"}';
let dogString = '{"breed": "Poodle"}';

//

// Parse the JSON string into an object
let birdObject = JSON.parse(birdString);
let dogObject = JSON.parse(dogString);

// We're sure that the jsonObject is actually a Bird
let bird = birdObject as Bird;
let dog = dogObject as Bird;

console.log(bird.name);
console.log(dog.name);

enum Status {
  Pending = 'pending',
  Declined = 'declined',
}

type User4 = {
  name: string;
  status: Status;
};
// save Status.Pending in the DB as a string
// retrieve string from the DB
const statusValue = 'pending';

const user: User4 = { name: 'john', status: statusValue as Status };

// Type Unknown
let unknownValue: unknown;

unknownValue = 'hello world';
unknownValue = [1, 2, 3];
unknownValue = 42.33456;

unknownValue.toFixed(2); // Error

// unknownValue.toFixed( ); // Error: Object is of type 'unknown'

// Now, let's try to use unknownValue
if (typeof unknownValue === 'number') {
  // TypeScript knows that unknownValue is a string in this block
  console.log(unknownValue.toFixed(2)); // OK
}

function runSomeCode() {
  const random = Math.random();
  if (random < 0.5) {
    throw new Error('Something went wrong');
  } else {
    throw 'some error';
  }
}

try {
  runSomeCode();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log(error);
    console.log('there was an error....');
  }
}
