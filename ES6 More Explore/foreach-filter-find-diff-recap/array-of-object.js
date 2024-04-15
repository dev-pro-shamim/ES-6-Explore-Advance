const products = [
        { id :1, name : 'lenevo-laptop', price : 5000 },
        { id :2, name : 'macBook', price : 15000 },
        { id :3, name : 'walton', price : 30000 },
        { id :4, name : 'Hp', price : 60000 },
    ]

    //map

    const names = products.map(products => products.name);
    console.log(names);

    const prices = products.map(products => products.price);
    console.log(prices);


    //ForEach

    products.forEach(products => console.log(products.id))

    //Filter

    const expensives = products.filter(products =>products.price >50000)
    console.log(expensives);

    //Find

    const affordable = products.find(products => products.price < 20000)
    console.log(affordable);

    //Reduce

    const total  =  products.reduce((p,c)=> p+c.price,0);
    console.log(total);
