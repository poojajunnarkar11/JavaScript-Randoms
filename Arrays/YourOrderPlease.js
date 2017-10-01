const order = (sentence) => {
    if (!sentence) return sentence
    return sentence.split(' ').sort((a,b) => {
        return a.match(/\d/) - b.match(/\d/)
    }).join(' ')
}
console.log(order('This 3a te4st i2s'))

//Alternate solution
// const order = (sentence) => {
//     if (!sentence) return ''
//     return sentence.split(' ').map(word => {
//         return {order: parseInt(/\d/g.exec(word)[0]), word}
//     }).sort((a,b) => {
//         return a.order - b.order
//     }).map(obj => {
//         return obj.word
//     }).join(' ')
// }