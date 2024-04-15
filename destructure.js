const actor = {
    name : 'Shamim',
    age : 22,
    phone : '01743589784',
    money : '50000'
}

// const name = actor.name;
// const age = actor.age;
// const phone = actor.phone;
// const money = actor.money;

//if right side is an object left side of destructuring will be object as well.
const {money,name,phone} = actor
console.log(money);



console.log(phone);
console.log(name);

//array destructuring

const numbers = [5,10];
const [first, second] = numbers;
const [x,y] = [15,12];

//function array
function doubleThem(a,b){
    return [a*2,b*2];

}
const [firsts , seconds] = doubleThem(6,9);
console.log(firsts,seconds);