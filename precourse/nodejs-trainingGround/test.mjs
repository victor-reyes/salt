import assert from "assert";
import { getAge, getAgeGroup } from "./index.mjs";
import { log } from "console";

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
      getAgeGroup(-1)
    })
  });
});
