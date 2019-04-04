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