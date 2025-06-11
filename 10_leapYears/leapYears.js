const leapYears = function(year) {
    if (!(year % 4 === 0))
        return false
    else if (!(year % 100 === 0))
        return true
    else if (!(year % 400 === 0))
        return false
    else return true
};
console.log(leapYears(1990))


// Do not edit below this line
module.exports = leapYears;
