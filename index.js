function isPalindrome(word) {
  
  const firstWord=word.split('');
  const secondWord=firstWord.reverse();
  const secondString =secondWord.join('')


  if (word == secondString){
    return true
  } else {
    return false
  }


if (require.main === module) {
  console.log("Expecting: false");
  console.log("=>", isPalindrome("true"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));


  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
