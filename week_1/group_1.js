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

function isPalindrome(string){

}
// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE WORD IS A PALINDROME
// "HELLO" => FALSE
// "KAYAK" => TRUE
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//


function isPalindrome(string){
    for (var i = 0; i < string.length / 2; i++){
      if (string[i] !== string[string.length - 1 -i]) {
        return false
      }
    }
    return true
  }
  
  console.log(isPalindrome('ocat'))
  console.log(isPalindrome('tacocat'))



function isPalindrome(string){
    for (var i = 0; i < string.length / 2; i++){
        if (string[i] != string[string.length-1]){
            return false
        }
        else if (string[i] == string[string.length-1-i]){
            return true
        }
    }
}
// I know. The second else if is wrong
// look at the solution above



function anagram(str1, str2) {
    var count = {};
    var count2 ={};
    for (var x = 0; x < str1.length; x++) {
      if (count[str1[x]] === undefined) {
        count[str1[x]] = 1;
      } else {
        count[str1[x]]++;
      }
    }
    console.log(count)
    for (var y = 0; y < str2.length; y++) {
        if (count2[str2[y]] === undefined) {
            count2[str2[y]] = 1;
        } else {
            count2[str2[y]]++;
        }
    }
    console.log(count2)
    if (count == count2) {
        return true
    } else {
        return false
    }
  }

anagram('ate', 'tea')

if (str1.length !== str2.length) {
    return false
}

isAnagram("tit", "tit") returns false ?

function isAnagram(string1, string2){
    var str1arr = string1.split("")
    var str2arr = string2.split("")
    var count = 0
    
    for (var i=0; i<str1arr.length; i++){
        for (var j=0; j<str2arr.length; j++){
            if (str2arr[j]==str1arr[i]){
                count ++
            }
        }
    }
    if (count != string2.length){
        return false
    }
    else {
        return true
    }
}

function isAnagram(string1, string2){

}

// HINT: YOU WANT TO USE A DICTIONARY
// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE TWO WORDS ARE ANAGRAMS
// EX. "ATE", "TEA" => TRUE
// EX. "LISTEN", "SILENT" => TRUE
// EX. "LISTEN", "SILENZ" => FALSE
// EX. "DEER", "REDD" => FALSE
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//


