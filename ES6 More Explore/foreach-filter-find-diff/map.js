const numbers = [1,5,8,10,12,20];

//================
function doubleIt(num){
    return num * 2;
}

const result = numbers.map(doubleIt)
console.log(result);



//=====
const double2 = n=> n*2;

const output = numbers.map(double2)
console.log(output);

//=======================

// const doubled = [];
// for(const num of numbers){
//     const double = num *2;
//     doubled.push(double);
// }
// console.log(doubled);