class Imotor  {
motor;    
#nitro = 'STUTUTUTU (Turbina)';
set motor(motor){

    this.motor = motor

}



get motor(){

    return this.motor

}

    constructor(){

    }

    acelerarGOL(){
        return "Vrummm....(Gol)";
    } 
    acelerarBMW(){
        return `BMW: VRUMMMMMMMMM!!!....${this.#nitro}` ;

    } 
    acelerarMER(){
        return "VRUMMMMM!!...(MERCEDES)";
    }

}
