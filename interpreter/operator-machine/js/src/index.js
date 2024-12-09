class Scenario{
    run(){
        const operator = new Operator();
        const machine = new Machine();
        
        console.log('Operator following morning protocol');
        const morningScript = new MorninProtocolScript();
        operator.performProtocol(morningScript, machine);

        console.log('Operador following evening protocol');
        const eveningScript = new EveningScript();
        operator.performProtocol(eveningScript, machine);
    }
}

class Operator{
    performProtocol(script, machine){
        script.execute(machine);
    }
}

class Machine{
    execute(script){
        script.execute();
    }
}

class Script {
    constructor(){
        if(new.target === Script){
            new TypeError('Abstract class cant be instanced.');
        }
    }
}

class MorninProtocolScript{

}

class EveningScript{

}
new Scenario().run();