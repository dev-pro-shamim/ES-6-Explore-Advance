class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    sleep(){
        console.log(`Playing Game in the Field ${this.name}`);
    }
}
const shamim = new Person('Shamim Islam' , 22);
console.log(shamim);

shamim.sleep()

const tamim = new Person('Tamim', 20);
tamim.sleep();


// =====>>>>>>>>>>Dot Nottation<<<<<<<<<<<<<<===========

// const Product = {
//     name : 'Banana',
//     price : 20 
// }

// console.log(Product.name);


// =====>>>>>>>>>>Braket Nottation<<<<<<<<<<<<<<===========

const Product = {
    name : 'Banana',
    price : 20 
}

console.log(Product['price']);