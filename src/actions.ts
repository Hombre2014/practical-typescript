export function sayHello(name: string): void {
  console.log(`Hello ${name}`);
}

export let person2 = 'susan';

export type Student = {
  name: string;
  age: number;
};

const newStudent3: Student = {
  name: 'Peter',
  age: 24,
};

export default newStudent3;
