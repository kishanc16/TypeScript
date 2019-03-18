var array1 = [3, 5, 6, 8, 9, 12];
var sum = function (acc, value) { return acc + value; };
var product = function (acc, value) { return acc * value; };
var sumOfArrayElements = array1.reduce(sum, 2);
var productElements = array1.reduce(product, 1);
var sumOfArrayElements1 = array1.reduce(function (acc, value) { return acc + value; });
console.log('Sum Of Elements: ', sumOfArrayElements);
console.log('Product Of Elements: ', productElements);
console.log('Sum Of Elements1: ', sumOfArrayElements1);
var sum2 = function (acc, value) {
    var result = acc + value;
    console.log(acc, 'plus', value, 'is', result);
    return result;
};
var sumElements = array1.reduce(sum2, 0);
