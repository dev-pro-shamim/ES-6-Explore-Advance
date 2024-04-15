const numbers = [1,55,3,89,565,25,10];
// for( let i =0; i < numbers.length; i++){

// }

for( const num of numbers){
    console.log(num);
}


//=====================================================================================================
const glass = {
    name : 'glass', color : 'red', price : 15, isCleaned : true
}
// for(const key of glass){
//     console.log(key);
//     //it's not work
// }


for(const key in glass){
    const value = glass[key]
   // console.log(key,value);
   
}

const keys = Object.keys(glass);
console.log(keys);
for(const key of keys){
    const value = glass[key]
    console.log(key,value);
}



