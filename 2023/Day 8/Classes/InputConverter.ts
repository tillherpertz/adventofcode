//@ts-ignore
import * as fs from "fs";

export default class InputConverter {
    input: string;
    instructions: number[][];
    constructor(input: string) {
        this.input = input;
    }

    convertToArray(): string[] {
        const string = fs.readFileSync(this.input).toString("utf-8");
        const array = string.replace(/\r/g, "").split('\n');
        // remove empty lines
        array.forEach((line, index) => {
            if (line === '') {
                array.splice(index, 1);
            }
        })
        return array
    }
}