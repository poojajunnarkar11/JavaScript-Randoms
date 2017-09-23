function insertDash(num) {
    var splitStrArr = num.toString().split('')
    
    var retStr = ''
    var splitStrArrLength = splitStrArr.length
    for(var i=0; i<splitStrArrLength-1; i++) {
        
        if(splitStrArr[i]%2 !== 0 && splitStrArr[i+1]%2 !== 0) {
            retStr+=`${splitStrArr[i]}-`
        } else {
            retStr+=`${splitStrArr[i]}`
        }
    }
    retStr+=splitStrArr[splitStrArrLength-1]
    return retStr
 }

console.log(insertDash(61352479))
 
 