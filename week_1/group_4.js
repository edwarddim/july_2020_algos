function parensValid(string){
    var count = 0;
    for (var i = 0; i < string.length; i++){
        if (string[i] === "(") {
            count++
            console.log(count)
        } else if (string[i] === ")") {
            count--
            console.log(count)
        }
        // EARLY EXIT
        if (count < 0) {
            return false
        }
    }
    if (count === 0) {
        return true
    } else {
        return false
    }    
}

console.log(parensValid("(()()))"));

// #1 Equal number of left and right parenthesis
// #2 Start with left parenthesis
// #3 End with right parenthesis

// RETURN TRUE OR FALSE ON WHETHER THE STRING HAS APPROPRIATE CLOSING AND OPENING BRACES
// EX. "()()()" => TRUE
// EX. "()(())" => TRUE
// EX. "(()()" => FALSE
// EX. "())(()" => FALSE

function bracesValid(string){
    var countParen = 0;
    var countBraces = 0;
    var countCurly= 0;
    for (var i = 0; i < string.length; i++){
        if (string[i] === "(") {
            countParen++
        
        } else if (string[i] === ")") {
            countParen--
            
        }
        if (countParen < 0) {
            return false
        }
        if (string[i] === "[") {
            countBraces++
            
        } else if (string[i] === "]") {
            countBraces--
            
        }
        if (countBraces < 0) {
            return false
        }
        if (string[i] === "{") {
            countCurly++
            
        } else if (string[i] === "}") {
            countCurly--
            
        }
        if (countCurly < 0) {
            return false
        }
    }
    if (countParen === 0 && countBraces === 0 && countCurly === 0) {
        return true
    } else {
        return false
    }
}

console.log(bracesValid("()[]}}"));
// TAKE PARENS VALID AND MAKE IT ACCOUNT FOR PARENS, SQUARE BRACKETS, AND SQUIGGLY BRACKETS
// WILL REQUIRE A STACK IMPLEMENTATION
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//