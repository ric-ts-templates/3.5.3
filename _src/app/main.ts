import {TS_Class1} from "./A/TS_Class1.js"; //Heureusement, le compilo. ne tiendra pas 
                                            //compte de l'extension écrite (".js"), 
                                            //et lira juste "./app/TS_Class1"
                                            //donc en l'occurence "./app/TS_Class1.ts"
                                            //Mais bon, c'est pas très beau non plus :/
export class Main {
    public run(): void {
        let oTS_Class1: TS_Class1 = new TS_Class1();
        oTS_Class1.debug();
    }        

}