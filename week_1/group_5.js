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

