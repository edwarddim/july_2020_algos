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

