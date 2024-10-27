// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
// Example 3:

// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

// Input: A string of letters, numbers and sapces
// Output: A string of letters, numbers and spaces where each word is seperated by only one space and the order of words is reversed from the input

// Algorithms:
// 1. Split the string on a space
// 2. Reverse the array
// 3. Map reversed array to trim each word and remove any leading or trailing spaces
// 4. Join the mapped array on a space
// 5. Return resulting string.

const reverseWords = (s) => {
  return s
    .split(" ")
    .filter((e) => e !== "")
    .reverse()
    .join(" ");
};

// console.log(reverseWords("the sky is blue"));
// console.log(reverseWords("  hello world  "));
// console.log(reverseWords("a good   example"));
// Space complexity: O(n)
// Time complexity: O(n)

const reverseWordsImperative = function (s) {
  let res = "";
  let temp = "";
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " " && temp.length) {
      res += temp + " ";
      temp = "";
    } else if (s[i] != " ") {
      temp = s[i] + temp;
    }

    if (i === 0 && temp.length) {
      res += temp;
    }
  }
  return res.trim();
};

console.log(reverseWordsImperative("the sky is blue"));
console.log(reverseWordsImperative("  hello world  "));
console.log(reverseWordsImperative("a good   example"));
