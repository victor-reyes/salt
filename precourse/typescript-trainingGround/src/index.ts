const greet = (name: string, birthYear: number) => {
  const age = new Date().getFullYear() - birthYear;
  return `Hello, ${name}, you are ${age} years old`;
};

const isOld = (age: number) => age >= 35;

const countOdd = (numbers: Array<number>) => numbers.filter(n => n % 2 !== 0).length;

const sumEven = (numbers: Array<number>) => numbers.filter(n => n % 2 === 0).reduce((prev, curr) => prev + curr, 0);

type Address = {
  street: string;
  streetNo: number;
  city: string;
};

type Person = {
  name: string;
  birthYear: number;
  address: Address;
};

const getPersonStreetNo = (person: Person) => person.address.streetNo;

class PersonClass {
  private name: string;

  birthYear: number;

  constructor(name: string, birthYear: number) {
    this.name = name;
    this.birthYear = birthYear;
  }

  getName() {
    return this.name;
  }
}

class EmployeeClass extends PersonClass {
  employeeId: number = -1;
}

interface IPerson {
  name: string;
  birthYear: number;
}

const getPersonNameString = (person: IPerson) => `${person.name}, ${person.birthYear}`;

const printThis = (p: Person | null | undefined) => (p === null || p === undefined ? 'no person supplied' : p.name);

export {
  greet,
  isOld,
  countOdd,
  sumEven,
  Person,
  Address,
  getPersonStreetNo,
  PersonClass,
  EmployeeClass,
  IPerson,
  getPersonNameString,
  printThis,
};
