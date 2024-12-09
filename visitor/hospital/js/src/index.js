class Scenario{
    run(){
        const hospital = new Hospital();
        const patient = new Patient();

        console.log('Hospital treating a patient with head injury.');
        patient.add(new Head());
        hospital.treatPatient(patient);

        console.log('Hospital treating a patient with head and trunk injury.');
        patient.add(new Trunk());
        hospital.treatPatient(patient);

        console.log('Hospital treating a patient with multiple injury');
        patient.add(new Limb());
        hospital.treatPatient(patient);        
    }
}

class Hospital{
    treatPatient(patient){
        patient.accept(new TriageNurse());
        patient.accept(new Doctor());
        patient.accept(new Surgeon());
    };
}

class Patient{
    constructor(){
        this._bodyParts = [];
    }

    accept(staff){
        console.log(`Accepting the visit of ${typeof staff} (patient)`);
        for(let i=0; i < this._bodyParts.length; i++){
            this._bodyParts[i].accept(staff);
        }        
    }
    
    add(bodypart){
        this._bodyParts.push(bodypart);
    }    
}

class BodyPart{
    constructor(){
        if(new.target === BodyPart){
            throw new TypeError("Cannot create an instance of an abstract class.");
        }
    }

    accept(staff){
        throw new Error('Method not implemented.');
    }
}

class Head extends BodyPart{
    accept(staff){
        staff.visitHead(this);
    }
}

class  Limb extends BodyPart{
    accept(staff){
        staff.visitLimb(this);
    }
}

class Trunk extends BodyPart{
    accept(staff){
        staff.visitTrunk(this);
    }
}

class Staff{
    constructor(){
        if(new.target === BodyPart){
            throw new TypeError('Cannot create an instance of an abstract class.');
        }
    }

    visitHead(head){
        throw new Error('Method not implemented.');
    }

    visitTrunk(trunk){
        throw new Error('Method not implemented.');
    }

    visitLimb(limb){
        throw new Error('Method not implemented.');
    }
    
}

class Doctor extends Staff{
    visitHead(head){
        console.log('Diagnosing head (doctor)');
    }

    visitTrunk(thrunk){
        console.log('Diagnosing trunk (doctor)');
    }

    visitLimb(limb){
        console.log('Diagnosing limb (doctor)');
    }
    
}

class TriageNurse extends Staff{
    visitHead(head){
        console.log('Diagnosing head (trangenurse).');
    }

    visitTrunk(thrunk){
        console.log('Diagnosing trunk (trangenurse');
    }

    visitLimb(limb){
        console.log('Diagnosing limb (trangenurse)');
    }

}

class Surgeon extends Staff{
    visitHead(head){
        console.log('Diagnosing head (surgeon)');
    }
    visitHead(head){
        console.log('Diagnosing head (trangenurse).');

    }

    visitTrunk(thrunk){
        console.log('Diagnosing trunk (surgeon)');
    }

    visitLimb(limb){
        console.log('Diagnosing limb (surgeon)');
    }
}

new Scenario().run();