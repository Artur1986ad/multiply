module.exports = function multiply(first, second) {
let number_first = BigInt(first);
let number_second = BigInt(second);
return (number_first * number_second).toString(10);
}
