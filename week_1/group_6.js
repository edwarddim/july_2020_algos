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

}

function parensValid(string){

}
// RETURN TRUE OR FALSE ON WHETHER THE STRING HAS APPROPRIATE CLOSING AND OPENING BRACES
// EX. "()()()" => TRUE
// EX. "()(())" => TRUE
// EX. "(()()" => FALSE
// EX. "())(()" => FALSE

function bracesValid(string){

}
// TAKE PARENS VALID AND MAKE IT ACCOUNT FOR PARENS, SQUARE BRACKETS, AND SQUIGGLY BRACKETS
// WILL REQUIRE A STACK IMPLEMENTATION
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//