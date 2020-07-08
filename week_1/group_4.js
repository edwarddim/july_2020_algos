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


function isPalindrome(string){
    if (string[0] !== string[string.length - 1] ) {
        return false
    }
    for (var i = 1; i < string.length/2; i++) {
        if (string[i] !== string[string.length - i - 1]) {
            return false
        }
    }
    return true
}


// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE WORD IS A PALINDROME
// "HELLO" => FALSE
// "KAYAK" => TRUE

function isAnagram(string1, string2){
    if (string1.length != string2.length) {
        return false
    }
    var sorted = {};
    var sorted2 = {};
    for (var i = 0; i < string1.length; i++) {
        sorted[i] = string1[i];
    }
    for (var i = 0; i < string2.length; i++) {
        sorted2[i] = string2[i];
    }
    for (var key of sorted) {
        for (var k of sorted2) {
            if (key == k) {
                delete sorted2[k];
            }
            console.log(sorted2)
        }
    }
}
    
isAnagram("test2", "test")
// HINT: YOU WANT TO USE A DICTIONARY
// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE TWO WORDS ARE ANAGRAMS
// EX. "ATE", "TEA" => TRUE
// EX. "LISTEN", "SILENT" => TRUE
// EX. "LISTEN", "SILENZ" => FALSE
// EX. "DEER", "REDD" => FALSE
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//