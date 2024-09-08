import assert from "assert";
import { getAge, getAgeGroup, getAgeForPerson, divideIt } from "./index.mjs";
import { describe } from "mocha";

describe("age calculator", () => {
  it("someone born 1972 is 50 2022", () => {
    // act
    const result = getAge(1972, 2022);

    // assert
    assert.equal(result, 50);
  });

  it("someone born 1989 is 35 2024", () => {
    const result = getAge(1989, 2024);

    assert.equal(result, 35);
  });
});

describe("age classifier", () => {
  it("0-3 years old should be a toddler", () => {
    // arrange
    // act
    const result0 = getAgeGroup(0);
    const result1 = getAgeGroup(1);
    const result2 = getAgeGroup(2);
    const result3 = getAgeGroup(3);

    // assert
    assert.equal(result0, "toddler");
    assert.equal(result1, "toddler");
    assert.equal(result2, "toddler");
    assert.equal(result3, "toddler");
  });

  it("4-12 years old should be a kid", () => {
    for (let i = 4; i <= 12; i++) {
      const result = getAgeGroup(i);
      assert.equal(result, "kid");
    }
  });

  it("13-19 years old should be a teenager", () => {
    for (let i = 13; i <= 19; i++) {
      const result = getAgeGroup(i);
      assert.equal(result, "teenager");
    }
  });

  it("20-39 years old should be a adult", () => {
    for (let i = 20; i <= 39; i++) {
      const result = getAgeGroup(i);
      assert.equal(result, "adult");
    }
  });

  it("above 39 years old ... you are just old", () => {
    for (let i = 40; i <= 150; i++) {
      if (i === 50) continue;
      const result = getAgeGroup(i);
      assert.equal(result, "old");
    }
  });

  it("But 50 - that is prime age, my friend. PRIME. AGE.", () => {
    // arrange
    // act
    const result = getAgeGroup(50);

    // assert
    assert.equal(result, "prime");
  });

  it("Should throw an exception, if the age is negative", () => {
    assert.throws(() => {
      getAgeGroup(-1);
    });
  });
});

describe("Playing with arrays", () => {
  it("removing elements from the beginning using splice", () => {
    // arrange
    const names = ["Marcus", "Eliza", "Obaid", "Arvid"];
    assert.equal(names.length, 4);

    // act
    names.splice(0, 1);

    // arrange
    assert.equal(names.length, 3);
    assert.equal(names[3], undefined);
    assert.equal(names[0], "Eliza");
  });
});

describe("Objects", () => {
  it("get age for person", () => {
    // arrange
    const currentYear = 2022;
    const person = {
      name: "Marcus",
      birthYear: 1972,
      isTeacher: true,
    };

    // act
    const age = getAgeForPerson(person, currentYear);

    // assert
    assert.equal(age, 50);
  });

  it("array of people with favorite movies", () => {
    const people = [
      {
        name: "Aragorn",
        favoriteMovies: [
          {
            title: "The Lord of the Rings: The Fellowship of the Ring",
            releaseYear: 2001,
          },
          {
            title: "The Lord of the Rings: The Two Towers",
            releaseYear: 2002,
          },
          {
            title: "The Lord of the Rings: The Return of the King",
            releaseYear: 2003,
          },
        ],
      },
      {
        name: "Frodo",
        favoriteMovies: [
          {
            title: "The Hobbit: An Unexpected Journey",
            releaseYear: 2012,
          },
          {
            title: "The Hobbit: The Desolation of Smaug",
            releaseYear: 2013,
          },
          {
            title: "The Hobbit: The Battle of the Five Armies",
            releaseYear: 2014,
          },
        ],
      },
    ];

    assert.equal(people.length, 2);
    assert.equal(people[1].name, "Frodo");
    assert.equal(people[1].favoriteMovies[0].title, "The Hobbit: An Unexpected Journey");
  });
});

describe("Exceptions", () => {
  it("division", () => {
    const result = divideIt(8, 10);

    assert.equal(result, 0.8);
  });

  it("division by zero", () => assert.throws(() => divideIt(1, 0)));
});
