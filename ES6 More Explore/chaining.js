//Data access
const data = [{id : 1, name : 'Shamim', address : 'Khansama'}];
console.log(data[0].address);


const products = {
    count : 5000,
    data : [
        { id :1, name : 'lenevo-laptop', price : 5000 },
        { id :2, name : 'macBook', price : 15000 },
    ]

}

//second product price
console.log(products.data[1].price);




//=============================
const user = {
    id : 5001,
    name : 'Shamim Islam',
    address : {
        streed :{
            first : '54/20 uttra sector 9',
            second : '20/20 rajvobon sector 2',
            thired : '20 uttra sector 10',
        },
        city : 'Dhaka'
    }

   
}

console.log(user.address.streed?.second);