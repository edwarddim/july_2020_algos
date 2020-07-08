// TURN THE INCOMING SENTENCE INTO AN ACRONYM
// EX. "Live From Saturday Night Live" => "LFSNL"
// NOTE. YOU CAN USE .SPLIT() METHOD// TURN THE INCOMING SENTENCE INTO AN ACRONYM

function acronyms(string) {
    str = string.split(' ')
    console.log(str)
    newStr = [];
    for (var i = 0; i < str.length; i++) {
        newStr.push(str[i][0]);
    }
    return newStr;
}


newString = acronyms("Live From Saturday Night Live");
console.log(newString);

// RETURN THE REVERSED STRING OF INPUT
// EX. "HELLO" => "OLLEH"
// NOTE. DO NOT USE ANY BUILT IN METHODS
function reverseString(string) {
    var newStr = '';
    for (var i = string.length - 1; i >= 0; i--) {
        newStr += string[i];
    }
    return newStr
}

newString = reverseString("HELLO");
console.log(newString);


function parensValid(string) {
    var stack = [];
    for(var i = 0; i < string.length; i++) {
        if (string[i] === ')') {
            if (stack.length > 0) {
                var last = stack.pop();
            } else {
                return false;
            }
        } else if (string[i] === '(') {
            stack.push(string[i]);
        }
    }
    if (stack.length > 0) {
        return false;
    }
    return true;
}
// RETURN TRUE OR FALSE ON WHETHER THE STRING HAS APPROPRIATE CLOSING AND OPENING BRACES
// EX. "()()()" => TRUE
// EX. "()(())" => TRUE
// EX. "(()()" => FALSE
// EX. "())(()" => FALSE


function bracesValid(string){
    var stack = [];
    for(var i = 0; i < string.length; i++) {
        var last;
        var curr = string[i]
        if (curr === ')' || curr === '}' || curr === ']') {
            if (stack.length > 0) {
                last = stack.pop();
                if (curr === ')' && last !== '(') {
                    return false;
                } else if (curr === '}' && last !== '{') {
                    return false;
                } else if (curr === ']' && last !== '[')
                    return false;
            } else {
                return false;
            }
        } else if (string[i] === '(' || string[i] === '{' || string[i] === '[') {
            stack.push(string[i]);
        }
    }
    if (stack.length > 0) {
        return false;
    }
    return true;
}




function bracesValid(string){

}


// TAKE PARENS VALID AND MAKE IT ACCOUNT FOR PARENS, SQUARE BRACKETS, AND SQUIGGLY BRACKETS
// WILL REQUIRE A STACK IMPLEMENTATION
// -----------------------------------------------------------------------------------------------//


// TAKE PARENS VALID AND MAKE IT ACCOUNT FOR PARENS, SQUARE BRACKETS, AND SQUIGGLY BRACKETS
// WILL REQUIRE A STACK IMPLEMENTATION
// -----------------------------------------------------------------------------------------------//


// YOURE FORGETING {}
function isPalindrome(string){
    for(var i = 0; i < Math.floor(string.length/2); i++){
        if (string[i] !== string[string.length - 1 - i]){
            return false;
        }
    }
    return true;
}





// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE WORD IS A PALINDROME
// "HELLO" => FALSE
// "KAYAK" => TRUE
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

function isAnagram(string1, string2) {
    if (string1.length !== string2.length) {
        return false;
    }
    var charCounts1 = {};
    var charCounts2 = {};
    for (var i = 0; i < string1.length; i++) {
        var char1 = string1[i];
        var char2 = string2[i];
        charCounts1[char1] = (charCounts1[char1]) ? charCounts1[char1]++ : 1;
        charCounts2[char2] = (charCounts2[char2]) ? charCounts2[char2]++ : 1;
    }
    for (var key in charCounts1) {
        if (!charCounts2[key] || charCounts1[key] !== charCounts2[key]) {
            return false;
        }
    }
    return true;
}
