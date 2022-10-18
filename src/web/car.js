class car{
motor;
#nitro = 'STUTUTUTU (Turbina)';


    constructor(motor){
        
        this.motor = motor;
        
    }   
    acelerarGOL(){
        return "Gol: Vrummm....";
    } 
    acelerarBMW(){
        return `BMW: VRUMMMMMMMMM!!!....${this.#nitro}` ;

    }
    acelerarMER(){
        return "Mercedes: VRUMMMMM!!...";
    }
}
