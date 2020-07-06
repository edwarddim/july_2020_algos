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