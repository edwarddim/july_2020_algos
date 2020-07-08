function isAnagram(string1, string2){
    var str1arr = string1.split("")
    var str2arr = string2.split("")
    var count = 0
    
    for (var i=0; i<str1arr.length; i++){
        for (var j=0; j<str2arr.length; j++){
            if (str2arr[j]==str1arr[i]){
                count ++
            }
        }
    }
    if (count != string2.length){
        return false
    }
    else {
        return true
    }
}
console.log(isAnagram("LISTEN", "SILENT"));
console.log(isAnagram("LISTEN", "SILENZ"));
console.log(isAnagram("DEER", "RED"));