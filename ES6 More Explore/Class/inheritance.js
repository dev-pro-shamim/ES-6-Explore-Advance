class Vehical{
    constructor(name,price){
        this.name = name;
        this.price = price;

    }
    move(){
        console.log('Vehical on the Move ....');
    }
}

class Bus extends Vehical{
    constructor(name,price,seat,ticketPrice){
        super(name,price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;

    }

}

class Truck extends Vehical{
    constructor(name,price,load){
        super(name,price);
        this.load = load;
    }
}