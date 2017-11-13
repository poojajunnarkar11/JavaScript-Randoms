const XO = (str) => {
    const matchedArray = str.match(/x|o/gi)
    var xCount, oCount = 0
    if(matchedArray) {
        const xArray = str.match(/x/gi)
        if (xArray){
            xCount = xArray.length
        }
        const oArray = str.match(/o/gi)
        if (oArray){
            oCount = oArray.length
        }
        if(xCount == oCount) return true
        else return false
    }
    else {return true}
}
console.log(XO('xxxx'))