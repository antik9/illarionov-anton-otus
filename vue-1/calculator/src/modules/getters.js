export default {
    timeValue: state => state.timeValue,
    trainingDay: state => Math.ceil(
        (new Date().getTime() - +state['startTimestamp']) / 1000 / 24 / 3600),
    minTime: state => state.minTime,
    maxTime: state => state.maxTime,
    accuracy: state => {
        return +state.globalRights > 0
            ? (+state.globalRights / (+state.globalRights + +state.globalWrongs)).toFixed(2)
            : 0
    },
    checkedAddition: state => state.choosenOperations.indexOf('Addition') !== -1,
    checkedSubtraction: state => state.choosenOperations.indexOf('Subtraction') !== -1,
    checkedMultiplication: state => state.choosenOperations.indexOf('Multiplication') !== -1,
    checkedDivision: state => state.choosenOperations.indexOf('Division') !== -1,
    counter: state => state.counter,
    on: state => state.on,
}
