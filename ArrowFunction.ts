var array1 = [3,5,6,8,9,12];
const sum =(acc, value) => acc + value;
const product =(acc,value) => acc * value;

var sumOfArrayElements = array1.reduce(sum,0);
var productElements = array1.reduce(product,1);

var sumOfArrayElements1 = array1.reduce((acc,value) => acc+value );

console.log('Sum Of Elements: ',sumOfArrayElements);
console.log('Product Of Elements: ',productElements);
console.log('Sum Of Elements1: ',sumOfArrayElements1);

const sum2 = (acc,value ) =>{
    const result = acc + value;
    console.log(acc,'plus',value,'is',result);
    return result;
}
var sumElements = array1.reduce(sum2,0);

