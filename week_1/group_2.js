// TURN THE INCOMING SENTENCE INTO AN ACRONYM
// EX. "Live From Saturday Night Live" => "LFSNL"
// NOTE. YOU CAN USE .SPLIT() METHOD
function acronyms(string){
    var firstArr = []
    var strArr = string.split(' ');

    for (var i = 0; i < strArr.length; i++){
        var word = strArr[i];
        var first = word[0];  
        firstArr.push(first)
    }
    
    return firstArr.join('').toUpperCase()
}

// RETURN THE REVERSED STRING OF INPUT
// EX. "HELLO" => "OLLEH"
// NOTE. DO NOT USE ANY BUILT IN METHODS
function stringReverse(string){
    
    for(var i = 0; i < string.length/2; i++){
        var temp = string[i];
        string[i] = string[string.length -1-i];
        string[string.length -1 -i] = temp;
    }

    return string
}

function revStr(inStr) {
    let rev = "";
    for (let i = inStr.length - 1; i >= 0; i--) {
        rev = rev + inStr[i];
    }
    return rev;
}