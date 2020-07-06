// TURN THE INCOMING SENTENCE INTO AN ACRONYM
// EX. "Live From Saturday Night Live" => "LFSNL"
// NOTE. YOU CAN USE .SPLIT() METHOD
function acronym(string) {
  acro = '';
  words = string.split(' ');
  for (var i = 0; i < words.length; i++) {
    acro += words[i][0];
  }
  return acro;
}

// RETURN THE REVERSED STRING OF INPUT
// EX. "HELLO" => "OLLEH"
// NOTE. DO NOT USE ANY BUILT IN METHODS
function stringReverse(string){
  var newString = ''
  for (var i = string.length-1; i >= 0; i--) {
    newString = newString + string[i];
  }
  return newString;
