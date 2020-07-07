// TURN THE INCOMING SENTENCE INTO AN ACRONYM
// EX. "Live From Saturday Night Live" => "LFSNL"
// NOTE. YOU CAN USE .SPLIT() METHOD
function acronyms(string){

}

// RETURN THE REVERSED STRING OF INPUT
// EX. "HELLO" => "OLLEH"
// NOTE. DO NOT USE ANY BUILT IN METHODS

// #1
function stringReverse(string){
 var temp = '';
 for (var i = string.length -1; i >= 0; i--) {
     temp += string[i];
 }
 return temp
}

var output = stringReverse('Hello')
console.log(output)

function stringReverse(string){
    var str = ""
    for (var i=string.length-1; i>=0; i--){
        str += string[i]
    }
    return str
}

function acronyms(string) {
    var arr = string.split(" ")
    var acronym = ""
    for (var i=0; i<arr.length; i++){
        acronym += arr[i].split("",1)
    }
    return acronym
}



// (splitter: { [Symbol.split](string: string, limit?: number): string[]; }, limit?: number): string[]
function parensValid(str){
    var lcount = 0
    var lp = "("
    var rcount = 0
    var rp = ")"
    for (var i = 0; i < str.length; i++){
        if (str[0] !== lp) {
            return "Invalid! No opening ("
        } else {
            lcount++
        }
        if (str[str.length - 1] !== rp) {
            return "Invalid! No closing )"
        } else {
            rcount++
        } if (lcount == rcount) {
            return "Equal number of braces!"
        }
    }
}
var output = parensValid("()()()")
console.log(output)



// #1 Equal number of left and right parenthesis
// #2 Start with left parenthesis
// #3 End with right parenthesis

function parensValid(str){
    var count = 0
    for (var i = 0; i < str.length; i++){
      if (str[i] == "(") {
        count++
        console.log("lcount: " + count)
      } else if (str[i] == ")") {
        count--
        console.log("rcount: " + count)
      }        
  } if (count !== 0) {
    return "Invalid!"
  } else if (count == 0) {
    return "Yay!"
  }
   return i
}
function parensValid(string){

}
// RETURN TRUE OR FALSE ON WHETHER THE STRING HAS APPROPRIATE CLOSING AND OPENING BRACES
// EX. "()()()" => TRUE
// EX. "()(())" => TRUE
// EX. "(()()" => FALSE
// EX. "())(()" => FALSE

function parensValid(string){
    var lp = "("
    var rp = ")"
    var arr = []
    for (var i = 0; i<string.length; i++){
        if (string[i] == lp){
            arr.push(string[i])
        }
        else if (string[i] == rp){
            arr.pop()
        }
    }
    if (arr.length !== 0){
        return false
    }
    else {
        return true
    }
}
(()))( ())
function bracesValid(string){

}
// TAKE PARENS VALID AND MAKE IT ACCOUNT FOR PARENS, SQUARE BRACKETS, AND SQUIGGLY BRACKETS
// WILL REQUIRE A STACK IMPLEMENTATION
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

function bracesValid(string){
    var arr = []
    for (var i = 0; i<string.length; i++){
        if (string[i] == "(" || "{" || "["){
            arr.push(string[i])
        }
        else if (string[i] == ")" || "}" || "]"){
            arr.pop()
        }
    }
    if (arr.length !== 0){
        return false
    }
    else {
        return true
    }
}