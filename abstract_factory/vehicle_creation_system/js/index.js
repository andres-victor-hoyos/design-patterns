class VehicleAssembler {
    assemble(){
        console.log("Assemble a vehicle");
    }
}

class VehicleFactory {
    createVehicle(){
        throw new Error('createVehicle method must be implemented');
    }
}

class CarAssembler extends VehicleAssembler {
    assemble(){
        console.log("Assembling a car");
    }
}


class MotorcycleAssembler extends VehicleAssembler {
    assemble(){
        console.log("Assembling a motorcycle.");
    }
}

class CarFactory extends VehicleFactory {
    createVehicle(){
        return new CarAssembler();
    }
}

class MotorcycleFactory extends VehicleFactory {
    createVehicle(){
        return new MotorcycleAssembler();
    }
}

class Dealership {
    makeVehicle(vehicleAssemblerFactory){
        const vehicleAssembler = vehicleAssemblerFactory.createVehicle();
        vehicleAssembler.assemble();
    }
}

function client(){
    const dealership = new Dealership();    
    dealership.makeVehicle(new CarFactory());
    dealership.makeVehicle(new MotorcycleFactory());
}

client();