import 'mocha';
import assert from 'assert';
import { greet, isOld, countOdd, sumEven, Person, getPersonStreetNo } from './index';

describe('ts tests', () => {
  it('get greeting', () => {
    // arrange
    const birthYear = 1989;
    const name = 'Victor';

    // act
    const result = greet(name, birthYear);

    // assert
    assert.strictEqual(result, 'Hello, Victor, you are 35 years old');
  });

  it('returns true if age is above or equal to 35', () => {
    // act
    const is34Old = isOld(34);
    const is35Old = isOld(35);
    const is36Old = isOld(36);

    // assert
    assert.strictEqual(is34Old, false);
    assert.strictEqual(is35Old, true);
    assert.strictEqual(is36Old, true);
  });

  it('fun with variables', () => {
    // act
    const name = 'Marcus';
    const nameImplicit = 'Marcus';
    const nameImplicit2 = name;

    const cool = true;
    const birthYear = 1972;

    // arrange
    assert.strictEqual(typeof cool, 'boolean');
    assert.strictEqual(typeof birthYear, 'number');
    assert.strictEqual(typeof name, 'string');
    assert.strictEqual(typeof nameImplicit, 'string');
    assert.strictEqual(typeof nameImplicit2, 'string');
  });

  it('arrays are typed in ts', () => {
    const names: string[] = ['Marcus', 'Julia', 'Catherine'];
    const firstFive = [1, 2, 3, 4, 5];
    const multipleTypesArray = [1, 'a', true];
  });

  it('count odd numbers', () => {
    // arrange
    const firstFive = [1, 2, 3, 4, 5];

    // act
    const numberOfOdds = countOdd(firstFive);

    // arrange
    assert.strictEqual(numberOfOdds, 3);
  });

  it('sum even numbers', () => {
    // arrange
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // act
    const sum = sumEven(nums);

    // arrange
    assert.strictEqual(sum, 30);
  });

  it('gets the street number for a person', () => {
    // arrange
    const p: Person = {
      name: 'Marcus',
      birthYear: 1972,
      address: {
        street: 'Strålgatan',
        streetNo: 23,
        city: 'Stockholm',
      },
    };

    // act
    const streetNo = getPersonStreetNo(p);

    // assert
    assert.strictEqual(streetNo, 23);
  });
});
