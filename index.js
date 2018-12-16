// To uppercase
function shout(string){
  return string.toUpperCase()
}

//To lowercase
function whisper(string){
  return string.toLowerCase()
}

// To logWhisper
function logWhisper(string){
  return console.log(string.toLowerCase())
}

// to logShout
function logShout(string){
  return console.log(string.toUpperCase())
}

// sayHiToGrandma
function sayHiToGrandma(string){
  if( string === string.toLowerCase()){
    console.log("I can't hear you!");
  }
}
