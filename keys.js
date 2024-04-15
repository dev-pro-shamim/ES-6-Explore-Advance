const glass = {
    name : 'glass', color : 'red', price : 15, isCleaned : true
}


//console.log(glass);

//for keys [ 'name', 'color', 'price', 'isCleaned' ]
const keys = Object.keys(glass);
console.log(keys);

//for values [ 'glass', 'red', 15, true ]

const values = Object.values(glass);
console.log(values);

//for entries **** array of array // two dymenttional array:    [ 'name', 'glass' ],
//   [ 'color', 'red' ],
//   [ 'price', 15 ],
//   [ 'isCleaned', true ]


 const entries = Object.entries(glass);
 console.log(entries);

 //for delete
//  delete glass.isCleaned;
//  console.log(glass);

const {isCleaned, ...shortGlass} = glass;
console.log(shortGlass);



//for freeze can't change anythings

Object.freeze(glass)
glass.sourch = 'Bangladesh'
console.log(glass);

// for seal
Object.seal(glass);
glass.price = 500;
console.log(glass);
