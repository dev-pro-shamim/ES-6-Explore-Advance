const products = [
    { id :1, name : 'lenevo-laptop', price : 5000 },
    { id :2, name : 'macBook', price : 15000 },
    { id :3, name : 'walton', price : 30000 },
    { id :4, name : 'Hp', price : 60000 },
]
//similar

class Product{
    country = 'Bangladesh';
    constructor(name){
        this.name = name;

    }
    speak(talk){
        console.log(`Talking About ${talk} `);
    }
}


const lenevo = new Product()
    console.log(lenevo);
lenevo.speak('Kibe tui kois ta kih ')


//===============================

class Teacher{
    constructor(name,subject){
        this.name = name;
        this.subject = subject;

    }
    lecture(){
        console.log('Sir Teach About Math..');
    }
}
const alamin = new Teacher('Al-Amin Sir' , 'Physics')

console.log(alamin);

