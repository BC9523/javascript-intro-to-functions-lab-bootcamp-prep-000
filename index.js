function shout(sentence){
  return sentence.toUpperCase();
}

function whisper(sentence){
  return sentence.toLowerCase();
}

function logShout(sentence){
  console.log(sentence.toUpperCase());
}

function logWhisper(sentence){
  console.log(sentence.toLowerCase());
}

function sayHiToGrandma(sentence){
  if (sentence === sentence.toUpperCase()){
    return "YES INDEED!";
  } else {
    return "I can\'t hear you!";
  }
}
// Helper Functions
function isUpperCase(sentence){
  return sentence === sentence.toUpperCase();
}

function isLowerCase(sentence){
  return sentence === sentence.toLowerCase();
}

function isMixedCase(sentence){
  if (sentence != sentence.toLowerCase() && sentence != sentence.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
