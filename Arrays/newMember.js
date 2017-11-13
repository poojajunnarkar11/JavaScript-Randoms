const myAwesomeMethod = (currentArray, newObjPosition, newObj) => {
    currentArray[newObjPosition] = newObj
}

var newArray = [];
for(var i=0; i<10; i++){
    myAwesomeMethod(newArray, i, 'Zoo '+i)
}
console.log(newArray)