import {mult, sum} from "./01";

let a: number;
let b: number;
let c: number;

beforeEach(() =>{
    a = 1;
    b = 2;
    c = 3;
})

test('sum should be corrected', () => {
    const result = sum(a, b);
    a = 100
    const result2 = sum(a, b);

    expect(result).toBe(3);
    expect(result2).toBe(102);
})

test('mult should be corrected', () => {
    const result = mult(a, b);
    const result2 = mult(b, c);

    expect(result).toBe(2);
    expect(result2).toBe(6);
})