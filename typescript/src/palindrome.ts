const isPalindrome = (str: string): boolean => {
  const result = str.split("").reverse().join("");
  const isCorrect = str === result;
  console.log(isCorrect);

  return str === result;
};

isPalindrome("racecar");
isPalindrome("hello");
