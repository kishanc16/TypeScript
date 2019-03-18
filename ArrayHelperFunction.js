//for each function
var companies = ['Isro', 'Ibm', 'Sun', 'oracle'];
function printdisplay(val) {
    console.log(val);
}
companies.forEach(printdisplay);
//Map Function
function capitalizeData(val) {
    return val.toUpperCase();
}
var Data = companies.map(capitalizeData);
console.log(Data);
//filter
var values = [1, 60, 34, 56, 82, 31, 44, 23];
function lessThan50(val) {
    return val < 50;
}
var lessValue = values.filter(lessThan50);
console.log(lessValue);
//find function
var people = [
    { name: 'ram', age: 30 },
    { name: 'Shyam', age: 40 },
    { name: 'raj', age: 25 },
    { name: 'kumar', age: 23 },
];
function young(person) {
    return person.age > 10 && person.age < 30;
}
var firstteenager = people.find(young);
console.log('Return first record', firstteenager.name);
//every function
var isEveryOneteenager = people.every(young);
console.log('Return first record', isEveryOneteenager);
// some function
var isEveryOneteen = people.every(young);
console.log('Return first record', isEveryOneteen);
