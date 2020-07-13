function frequencyTable(arr){
    var freqObj = {}
    for (var i = 0; i < arr.length; i++){
        if (freqObj.hasOwnProperty(arr[i])){
            freqObj[arr[i]] += 1
        } else {
            freqObj[arr[i]] = 1
        }
    }

    return freqObj
}

function reverseWordOrder(string){
    var arr = string.split(' ');
    var newString = ''
    for (var i = arr.length - 1; i > 0; i--) {
        newString += arr[i] + ' '
    }
    newString += arr[i]
    return newString
}
