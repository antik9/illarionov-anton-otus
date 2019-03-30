const sum = function(...args) {
    if ( args.length == 0 ) {
        return 0;
    } else if ( args[args.length - 1] == undefined ) {
        return undefined;
    } else {
        return function(...extra) {
            if ( extra.length == 0 ) {
                return args.reduce((acc, next) => acc + next);
            } else {
                return sum(...args, ...extra);
            }
        }
    }
}

console.assert(sum(1)(2)(3)() == 6, "not equal to 6")
console.assert(sum() === 0, "not equal to 0")
console.assert(sum(4)(4)(3)(10)(1)() === 22, "not equal to 22")
console.assert(sum(.4)(.4)(.2)() === 1.0, "not equal to 1.0")
console.assert(sum("a")("b")("c")() == "abc", "not equal to abc")
console.assert(sum(undefined) === undefined, "is not undefined")