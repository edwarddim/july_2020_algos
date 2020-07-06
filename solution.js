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
    // var newString = ""
    // for(var i = string.length-1; i >= 0; i--){
    //     newString += string[i]
    // }
    for(var i =0; i < string.length/2; i++){
        var temp = string[i]
        string[i] = string[string.length-1-i]
        string[string.length-1-i] = temp
    }
    return string
}
var string = "hello"
console.log(reverseString(string))