
// 1. f1: User enters sentence (sentence) 
// 2. f2: Take first and last letters, capitalize them, return as new string (firstAndLast)
// 3. f3: combine components: Concatenate the two-letter string with the original phrase, adding firstAndLast to end of sentence
// 4. f4: Count # of letters in original sentence, divide by 2, and output letter at this index. Concaenate at the beginning of the original sentence.

const sentence = window.prompt("Enter a sentence.");
window.alert(sentence);

function lastTwo()  {
  const lastChar = sentence.length - 1;
  let firstAndLast = sentence.charAt(lastChar) + sentence.charAt(0);
  firstAndLast = firstAndLast.toUpperCase();
  return firstAndLast;
}

// lastTwo ();

function combineComponents () {
  firstAndLast = lastTwo();
  const cipher = sentence + firstAndLast;
  return cipher;
}

// combineComponents();

function addMiddleLetter () {
  const cipher = combineComponents();
  sentenceLength = sentence.length; 
  index = Math.floor(sentenceLength / 2);
  finalCipher = sentence.charAt(index) + cipher;
  return finalCipher
}

addMiddleLetter();

// count sentence length... sentLength = sentence.length
// divide sentLength by 2 - round down Math.floor = index
// concatenate letter at index + cipher = finalCipher