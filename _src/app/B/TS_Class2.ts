//import {TS_LibClass1} from "@libs/TS/TS_LibClass1.js";
import {TS_LibClass1} from "libs/TS/TS_LibClass1.js";

export class TS_Class2 {
    debug() {
        console.log('TS_Class2.debug()');

        (new TS_LibClass1()).debug();
    }
}