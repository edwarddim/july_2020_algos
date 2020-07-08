// TURN THE INCOMING SENTENCE INTO AN ACRONYM
// EX. "Live From Saturday Night Live" => "LFSNL"
// NOTE. YOU CAN USE .SPLIT() METHOD

function acronyms(string){
    var acronym = ''
    var words = string.split(' ')
    for (var i = 0; i < words.length; i++){
        acronym += words[i][0]
    }
    return acronym
}
console.log(acronyms("Live From Saturday Night Live"))

// -----------------------------------------------------------------------------------------------//

// RETURN THE REVERSED STRING OF INPUT
// EX. "HELLO" => "OLLEH"
// NOTE. DO NOT USE ANY BUILT IN METHODS

function stringReverse(string){
    var newStr = ''
    for (var i = string.length-1; i >= 0; i--){
        newStr += string[i]
    }
    return newStr
}
console.log(stringReverse("HELLO"))

// -----------------------------------------------------------------------------------------------//

// RETURN TRUE OR FALSE ON WHETHER THE STRING HAS APPROPRIATE CLOSING AND OPENING BRACES

function parensValidCounter(string){
    let counter = 0;
    for(char of string){
        if(char ==="("){
            counter++
        }
        else{
            counter--
        }
        if(counter < 0) return false
    }
    if(counter == 0) return true
}
console.log(parensValidCounter("()()()"))
console.log(parensValidCounter("()(())"))
console.log(parensValidCounter("(()()"))
console.log(parensValidCounter("())(()"))

// -----------------------------------------------------------------------------------------------//

// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE WORD IS A PALINDROME
// "HELLO" => FALSE
// "KAYAK" => TRUE
function isPalindrome(string){
    for(let i = 0; i < Math.floor(string.length/2); i++){
        if(string[i] == string[string.length-1-i]){
            continue
        }
        else{
            return false
        }
    }
    return true
}
console.log(isPalindrome('madam'))
console.log(isPalindrome('tacocat'))
console.log(isPalindrome('abba'))
console.log(isPalindrome('someone'))

// -----------------------------------------------------------------------------------------------//

// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE TWO WORDS ARE ANAGRAMS
// HINT: YOU WANT TO USE A DICTIONARY

function isAnagram(string1, string2){
    string1 = string1.replace(/[^\w]/g, '').toLowerCase()
    string2 = string2.replace(/[^\w]/g, '').toLowerCase()
    
    return sortString(string1) === sortString(string2)
}
function sortString(string) {
    return string.split('').sort().join('');
}

console.log(isAnagram("ATE", "TEA"))
console.log(isAnagram("LISTEN", "SILENT"))
console.log(isAnagram("LISTEN", "SILENZ"))
console.log(isAnagram("DEER", "REDD"))

// -----------------------------------------------------------------------------------------------//