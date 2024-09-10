function greet(name: string, birthYear: number): string {
  const age = new Date().getFullYear() - birthYear;
  return `Hello, ${name}, you are ${age} years old`;
}

function isOld(age: number) {
  return age >= 35;
}

function countOdd(numbers: Array<number>) {
  return numbers.filter(n => n % 2 !== 0).length;
}

function sumEven(numbers: Array<number>) {
  return numbers.filter(n => n % 2 === 0).reduce((prev, curr) => prev + curr, 0);
}

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

function getPersonStreetNo(person: Person) {
  return person.address.streetNo;
}

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

export {
  greet, isOld, countOdd, sumEven, Person, Address, getPersonStreetNo, PersonClass, EmployeeClass,
};
