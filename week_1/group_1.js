// TURN THE INCOMING SENTENCE INTO AN ACRONYM
// EX. "Live From Saturday Night Live" => "LFSNL"
// NOTE. YOU CAN USE .SPLIT() METHOD
function acronyms(string){

}

// RETURN THE REVERSED STRING OF INPUT
// EX. "HELLO" => "OLLEH"
// NOTE. DO NOT USE ANY BUILT IN METHODS

// #1
function stringReverse(string){
 var temp = '';
 for (var i = string.length -1; i >= 0; i--) {
     temp += string[i];
 }
 return temp
}

var output = stringReverse('Hello')
console.log(output)

function stringReverse(string){
    var str = ""
    for (var i=string.length-1; i>=0; i--){
        str += string[i]
    }
    return str
}

function acronyms(string) {
    var arr = string.split(" ")
    var acronym = ""
    for (var i=0; i<arr.length; i++){
        acronym += arr[i].split("",1)
    }
    return acronym
}



// (splitter: { [Symbol.split](string: string, limit?: number): string[]; }, limit?: number): string[]