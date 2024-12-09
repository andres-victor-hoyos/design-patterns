
const MAX_NUMBER_EMPLOYEES_PER_TYPE = 10;

class Scenario {
    run(){
        const waiter = new Waiter();
        const chefs = [];
        const barmen = [];
        for(let i=0;i<MAX_NUMBER_EMPLOYEES_PER_TYPE;i++){
            chefs[i]=new Chef("chef " + (i+1));
            barmen[i] = new Barman("barman " + (i+1)); 
        }
        const restaurant = new Restaurant(waiter, chefs, barmen);
        restaurant.attemdToCustomerAtLunchTime();
        restaurant.attendToCustomersAtDinnerTime();        
    }
}

class Restaurant{
    constructor(waiter, chefs, barmen){
        this._waiter = waiter;
        this._chefs = chefs;
        this._barmen = barmen;
    }
    
    attemdToCustomerAtLunchTime(){
        this._waiter.serve(new VermouthOrder(this._barmen));
        this._waiter.serve(new DishOfTheDayOrder(this._chefs));

    }

    attendToCustomersAtDinnerTime(){
        this._waiter.serve(new CombinationPlateOrder(this._chefs));
        this._waiter.serve(new BloodyMaryOrder(this._barmen));
    }
}

class Waiter{
    serve(order){
        console.log('Requesting an order (waiter)');
        order.serve();
    }
}

class KitchenEmployee {
    constructor(name){
        this._name = name;
    }
    
    get name(){
        return this._name;
    }
}

class Order{
    serve(){
        throw("Error: Not implemented.");
    }
}

class BarmanOrder extends Order{
    constructor(barmen){
        super();
        this._barmen = barmen;
    }

    get BarmanAssigned(){
        const assignedId =Math.floor(Math.random() * this._barmen.length);
        return this._barmen[assignedId];
    }
}

class ChefOrder extends Order{
    constructor(chefs){
        super();
        this._chefs = chefs;
    }

    get ChefAssigned(){
        const assignedId =Math.floor(Math.random() * this._chefs.length);
        return this._chefs[assignedId];
    }
}

class BloodyMaryOrder extends BarmanOrder{
    constructor(barmen){
        super(barmen);
    }

    serve(){
        console.log("Requesting an order (vermouth)");
        this.BarmanAssigned.prepareVermouth();
    }
}

class CombinationPlateOrder extends ChefOrder{
    constructor(chefs){
        super(chefs);
    }

    serve(){
        console.log("Requesting an order (vermouth)");
        this.ChefAssigned.prepareSalad();
        this.ChefAssigned.prepareEggs();
        this.ChefAssigned.prepareFries();
    }
}

class DishOfTheDayOrder extends ChefOrder {
    constructor(chefs){
        super(chefs);
    }

    serve(){
        console.log("Requesting an order (dishOfTheDay)");
        this.ChefAssigned.prepareSoup();
        this.ChefAssigned.prepareSteak();
        this.ChefAssigned.prepareFries();
    }
}

class VermouthOrder extends BarmanOrder {
    constructor(barmen){
        super(barmen);
    }

    serve(){
        console.log("Requesting an order (vermouth)");
        this.BarmanAssigned.prepareVermouth();
    }
}

class Chef extends KitchenEmployee{
    constructor(name){
       super(name);
    }

    prepareSalad(){
        console.log(`Prepare Salad ${this.name}`);
    }

    prepareEggs(){
        console.log(`Prepare Eggs ${this.name}`);
    }
    
    prepareFries(){
        console.log(`Prepare Fries ${this.name}`);
    }

    prepareSoup(){
        console.log(`Prepare Soup ${this.name}`);
    }

    prepareSteak(){
        console.log(`Prepare steak ${this.name}`);
    }
}

class Barman extends KitchenEmployee{
    constructor(name){
        super(name);
    }

    prepareVermouth(){
        console.log(`Prepare vermouth ${this.name}`);
    }

    prepareBloodMary(){
        console.log(`Prepare bloodmary ${this.name}`);
    }
}

new Scenario().run();