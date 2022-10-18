
// 1. User enters sentence (sentence)
// 2. Take first and last letters, capitalize them, return as new string (firstAndLast)
// 3. Call other functions created 
// 4. Concatenate the two-letter string with the original phrase, adding firstAndLast to end of sentence
// 5. Count # of letters in original dentence, divide by 2, and output letter at this index. Concaenate at the beginning of the original sentence.

function encodeSentence () {
  const sentence = window.prompt("Enter a sentence.");
  window.alert(sentence);
  let lastChar = sentence.length - 1
  let firstAndLast = sentence.charAt(lastChar) + sentence.charAt(0);
  firstAndLast = firstAndLast.toUpperCase();
  const cipher = sentence + firstAndLast;
  return firstAndLast;
}

encodeSentence ();
