import "mocha";
import assert from "assert";
import { greet } from "./index";

describe("ts tests", () => {
  it("get greeting", () => {
    // arrange
    const birthYear = 1989;
    const name = "Victor";

    // act
    const result = greet(name, birthYear);

    // assert
    assert.strictEqual(result, "Hello, Victor, you are 35 years old");
  });
});