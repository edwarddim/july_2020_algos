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

function parensValid(string){
    var open = 0;
    var closed = 0
    for(var i = 0; i < string.length; i++){
        if(string.indexOf('(') == 0){
            open++
        }
        string.indexOf('(')
    }
    if('(' > ')' || ')' > '('){
        return false
    }

}

function parensValid3(string){

    for(var i = 0; i < string.length; i++){
        if(string[i] == '('){
            for(var j = i; j < string.length -i; j++){
                if(string.indexOf(')') != -1){
                    continue
                } else{
                    return false
                }
            }
        } else{
            continue
        }
    }
}
// RETURN TRUE OR FALSE ON WHETHER THE STRING HAS APPROPRIATE CLOSING AND OPENING BRACES
// EX. "()()()" => TRUE
// EX. "()(())" => TRUE
// EX. "(()()" => FALSE
// EX. "())(()" => FALSE
function parensValid(inStr) {
    // EARLY EXIT / CONSIDERING ANY EDGE CASES
    if (inStr.length % 2 != 0 || inStr[0] != "(") {
        return false;
    }
    openParens = ["("];
    let firstOpenParen = [];
    firstOpenParen.push(inStr[0]);

    for (let i = 1; i < inStr.length; i++) {
        if (openParens.includes(inStr[i])) {
            firstOpenParen.push(inStr[i]);

            //   console.log("firstOpenParen: ", firstOpenParen);
        } else {
            firstOpenParen.shift();
            //   closeParen.push(inStr[i]);
            //   console.log("close Paren: ", closeParen);
        }
    }
    return firstOpenParen.length == 0;
}
console.log(parensValid("'())(()'"));

function bracesValid(inString) {
    let openBrace = ["(","{","["]
    if (inString.length % 2 != 0) {
        return false
    }
    if (!openBrace.includes(inString[0])) {
        return false
    }

    for (let i = 1; i < inStr.length; i++){
        
    }

}
// TAKE PARENS VALID AND MAKE IT ACCOUNT FOR PARENS, SQUARE BRACKETS, AND SQUIGGLY BRACKETS
// WILL REQUIRE A STACK IMPLEMENTATION
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//