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
  // method
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
