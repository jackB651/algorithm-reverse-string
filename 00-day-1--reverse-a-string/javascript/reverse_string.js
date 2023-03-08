function reverseString(str) {
  // type your code here
  let reversedString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }

  return reversedString;
}

if (require.main === module) {
  // add your own tests in here
  console.log("hello world: ", reverseString("hello world"))
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
  //create empty string
  //loop for length of string
     //add character from str to empty string
  //return string
