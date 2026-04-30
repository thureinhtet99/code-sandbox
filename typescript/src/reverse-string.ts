// using js built-in functions
const reverseString = (str: string): string => {
  const result = str.split("").reverse().join("");
  console.log(result);

  return result;
};

reverseString("hello");

// using for-loop
const reverseStringWithLoop = (str: string): string => {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  console.log(result);

  return result;
};

reverseStringWithLoop("hello");
