const sum = function(...acc) {
    /**
     * Function to make continious sum of numbers or strings
     * Example: sum(1)(2)()
     */
    if ( acc.length == 0 ) {
        return 0;
    } else if ( acc.length > 1 ) {
        console.error("Method should receive one or zero arguments");
        return undefined;
    } else if ( typeof(acc[0]) != 'number' && typeof(acc[0]) != 'string') {
        console.error("Only numbers and string are allowed");
        return undefined;
    } else {
        return function(...extra) {
            if ( extra.length == 0 ) {
                return acc[0];
            } else if ( extra.length > 1 ) {
                return sum(...extra);
            } else if ( typeof(acc[0]) != typeof(extra[0])) {
                console.error("Different types of arguments")
                return undefined;
            }
            return sum(acc[0] + extra[0]);
        };
    }
}

console.assert(sum(1)(2)(3)() == 6, "not equal to 6")
console.assert(sum() === 0, "not equal to 0")
console.assert(sum(4)(4)(3)(10)(1)() === 22, "not equal to 22")
console.assert(sum(.4)(.4)(.2)(1)() === 2.0, "not equal to 2.0")
console.assert(sum("a")("b")("c")() == "abc", "not equal to abc")
console.assert(sum(undefined) === undefined, "is not undefined")
console.assert(sum(1, 2) === undefined, "two or more arguments are not allowed")
console.assert(sum(1)("a") === undefined, "different types are not allowed")
console.assert(sum({}) === undefined, "bad argument is allowed")