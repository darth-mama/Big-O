//1
//The function iterates from 1 to 𝑛,logging each number.
//Therefore, it performs n iterations.
function logUpTo(n) {
    for (let i = 1; i <= n; i++) {
      console.log(i);
    }
  }
  
  //2
  //The loop runs from 1 to the maximum of n and 10.
  //If n is less than 10, it will still run 10 times (constant time).
  //If n is 10 or more, it will run n times.
  //Therefore, the time complexity is 𝑂(𝑛)
  function logAtLeast10(n) {
    for (let i = 1; i <= Math.max(n, 10); i++) {
      console.log(i);
    }
  }

//3
//The loop runs from 1 to the minimum of n and 10.
//The maximum number of iterations is 10, which is a constant.
//Therefore, the time complexity is O(1).
  function logAtMost10(n) {
    for (let i = 1; i <= Math.min(n, 10); i++) {
      console.log(i);
    }
  }
  
  
//4
//The loop runs from 0 to the length of the array, iterating over each element.
//The operations inside the loop (checking if the index is even and pushing to a new array) are 𝑂(1)
//Therefore, the overall time complexity is 𝑂(𝑛)

function onlyElementsAtEvenIndex(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  }

//5 
//The outer loop runs 𝑛 times (from 0 to the length of the array).
//The inner loop runs 𝑖+1i+1 times for each iteration of the outer loop, resulting in a cumulative total of:
// 1+2+3+…+n, which is 𝑂(𝑛2).
//Therefore, the overall time complexity is 𝑂(𝑛2)

  function subtotals(array) {
    let subtotalArray = [];
    for (let i = 0; i < array.length; i++) {
      let subtotal = 0;
      for (let j = 0; j <= i; j++) {
        subtotal += array[j];
      }
      subtotalArray.push(subtotal);
    }
    return subtotalArray;
  }
  
  //6
  //The loop iterates over each character in the string str, which takes 𝑂(𝑛) time.
  //The includes method for a string of constant length (vowels) is O(1).
  //Therefore, the overall time complexity is O(n).
  function vowelCount(str) {
  let vowelCount = {};
  const vowels = "aeiouAEIOU";

  for (let char of str) {
    if(vowels.includes(char)) {
      if(char in vowelCount) {
        vowelCount[char] += 1;
      } else {
        vowelCount[char] = 1;
      }
    }
  }

  return vowelCount;
}
