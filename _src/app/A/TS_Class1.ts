import {TS_Class2} from "./../B/TS_Class2.js";

export class TS_Class1 {
    debug() {
        console.log('TS_Class1.debug()');
        (new TS_Class2()).debug();
    }
}