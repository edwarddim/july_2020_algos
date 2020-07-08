function acronym(string){
    var strArr = string.split(" ")
    var returnString = ""
    for(var i=0; i < strArr.length;i++){
        returnString += strArr[i][0]
    }
    return returnString
}
// console.log(acronym("Live From Sat Night Live"))

function reverseString(string){
    var newString = ""
    for(var i = string.length-1; i >= 0; i--){
        newString += string[i]
    }
    return newString
}
var string = "hello"
console.log(reverseString(string))


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


function isPalindrome(string){
    for(let i = 0; i < Math.floor(string.length/2); i++){
        if(string[i] === string[string.length-1-i]){
            continue
        }
        else{
            console.log("NOT PALINDROME")
            return false
        }
    }
    console.log("PALINDROME")
    return true
}
// isPalindrome('madam')
// isPalindrome('tacocat')
// isPalindrome('abba')
// isPalindrome("someone")

function isAnagram(string1, string2){
    dict1 = {}
    if(string1.length != string2.length){
        return false
    }
    for(let i = 0; i < string1.length; i++){
        if(string1[i] in dict1){
            dict1[string1[i]] += 1
        }
        else{
            dict1[string1[i]] = 1
        }
    }
    for(let j = 0; j < string2.length; j++){
        if(string2[j] in dict1){
            dict1[string2[j]] -= 1
            if(dict1[string2[j]] < 0){
                return false
            }
        }
        else{
            return false
        }
    }
    return true
}