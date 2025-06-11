const sumAll = function(a, b) {
    let finalSum = 0
    if (!Number.isInteger(a) || (!Number.isInteger(b)))
        return ("ERROR")

    if (a > b) {
      let temp = a;
      a = b;
      b = temp;
    }

    if (a < 0 || b < 0)
        return ("ERROR")
    
    for (let i = a; i <= b; i++) {
        finalSum = finalSum + i
    } 
    return finalSum
};
console.log(sumAll(5, 1))

// Do not edit below this line
module.exports = sumAll;
