async function promiseReduce(asyncFunctions, reduceFunc, initialValue) {
    var reducedValue = initialValue;
    for ( i = 0; i < asyncFunctions.length; ++i ) {
        let data = await asyncFunctions[i]();
        reducedValue = reduceFunc(reducedValue, data);
    };
    return reducedValue;
};

var fn1 = () => { return Promise.resolve(4) }
var fn2 = () => new Promise(resolve => { setTimeout(() => resolve(3), 800) })
var fn3 = () => new Promise(resolve => { setTimeout(() => resolve(2), 400) })

let result = promiseReduce(
    [fn1, fn2, fn3],
    function (memo, value) {
        var newMemo = memo.slice(0);
        newMemo.push(value);
        return newMemo;
    },
    []
)

async function asyncAssert(promise, reference, msg) {
    var data = await promise;
    console.assert(
        data.length === reference.length 
            && data.every((value, index) => value === reference[index]),
        msg);
};

asyncAssert(result, [4, 3, 2], "Pushing error")