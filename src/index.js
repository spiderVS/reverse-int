module.exports = function reverse (n) {
    let number = Math.abs(n);
    let numberToStr = number +'';
    let newStr = '';
    for (let i = (numberToStr.length - 1); i >= 0; i--) {
        newStr += numberToStr[i];
    }
    number = +newStr;
return number;
}
