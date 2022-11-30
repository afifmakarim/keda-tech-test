import { palindromCheck, fizzBuzz, sortAsc } from "../src/sum";

describe("test fizz buzz", () => {
  const result = fizzBuzz(15);

  it("OK, e % 3 == 0 return fish", () => {
    expect(result[2].element).toBe(3); // cek value element array 2 bernilai 3
    expect(result[2].statusData).toEqual("fish"); // cek value statusData array 2 bernilai fish
  });

  it("OK, e % 5 == 0 return bash", () => {
    expect(result[4].element).toBe(5);
    expect(result[4].statusData).toEqual("bash");
  });

  it("OK, e % 15 == 0 return fish bash", () => {
    expect(result[14].element).toBe(15);
    expect(result[14].statusData).toEqual("fish bash");
  });
});

test("sorting ascending", () => {
  const array = [1, 7, 2, 8, 3, 4, 5, 0, 9];
  const result = sortAsc(array);
  expect(result).toEqual([0, 1, 2, 3, 4, 5, 7, 8, 9]);
});

test("check palindrome", () => {
  const result = palindromCheck("eye");
  expect(result).toEqual(true);
});
