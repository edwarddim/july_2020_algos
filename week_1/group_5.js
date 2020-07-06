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