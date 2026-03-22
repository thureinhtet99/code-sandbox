// FizzBuzz
// - convert number parameter to number array
// - before make condition for % 3, 5, must make condition for 15 (3 * 5 = 15)
// - convert each number in array to string

const fizzBuzz = (n: number): string[] => {
  const result = Array.from({ length: n }, (_, i) => {
    const num = i + 1;
    if (num % 15 === 0) return "FizzBuzz";
    if (num % 3 === 0) return "Fizz";
    if (num % 5 === 0) return "Buzz";

    return String(num);
  });
  console.log(result);

  return result;
};

fizzBuzz(35);
