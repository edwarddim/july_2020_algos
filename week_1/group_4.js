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


function bookIndex(array){
    indexString = ""
    for (var i = 0; i < array.length; i++) {
        var endthrough = array[i]
        var j = i
        while (array[j + 1] == array[j] + 1) {
            j++
        }
        endthrough = array[j]
        if (j - i != 0) {
            indexString += " " + array[i] + "-" + endthrough + ','
        } else if {
            indexString += array[i] + "," 
        }
        i = j
        
    }
    console.log(indexString)
}

bookIndex([1,13,14,15,16,17,18,19,22,37,38,68,69,70,71])
// GIVEN AN ARRAY OF BOOK PAGE NUMBERS RETURN INDEXED VERSION STRING OF BOOK PAGES
// EX. [1,13,14,15,37,38,70] => "1, 13-15, 37-38, 70"

function join(arr, seperator){
    for 

}
// Given an arr and a separator string, output a string of every item in the array separated by the separator.
// EX. [1,2,3] , ", " => "1, 2, 3"
// EX. [1,2,3] , "-" => "1-2-3"
// EX. [1] , "-" => "1"
// EX. [], "," => ""

function invertObj(obj){
    var newobj = {}
    for (var key in obj) {
        newobj[obj[key]] = key
    }
    return newobj
}

console.log(invertObj({'A': "ONE", 'B': "TWO", 'C': 'THREE'}))
// GIVEN AN OBJECT WITH KEY VALUE PAIRS, SWAP THE KEYS AND VALUES OF THE OBJECT
// EX.
// {
//     'A':"ONE",
//     'B':"TWO",
//     'C':"THREE"
// }
// {
//     "ONE":'A',
//     "TWO":'B',
//     "THREE":'C'
// }
function minCoinChange(num){
    var coins = {
        'quarters': 0,
        'dimes': 0,
        'nickels': 0,
        'pennies': 0
    };
    coins.quarters = Math.floor(num / 25);
    num = num % 25

    coins.dimes = Math.floor(num / 10);
    num = num % 10

    coins.nickels = Math.floor(num / 5);
    num = num % 5

    coins.pennies = num

    return coins;
}

console.log(minCoinChange(321))
// GIVEN A NUMBER FIND THE LEAST AMOUNT OF COINS YOU CAN USE TO HAVE THE SAME AMOUNT
// EX. 321 => "12 QUARTERS, 2 DIMES, 1 PENNY"