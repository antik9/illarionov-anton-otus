export default  {
    addOperation (state, operation) {
        if (state.choosenOperations.indexOf(operation) === -1) {
            state.choosenOperations.push(operation)
        }
    },
    removeOperation (state, operation) {
        if (state.choosenOperations.indexOf(operation) !== -1) {
            state.choosenOperations = state.choosenOperations.filter(item => item != operation)
        }
    },
    changeComplexity (state, value) {
        state.complexity = value
    },
    changeTime (state, value) {
        state.timeValue = value
    },
    setValue(state, value) {
        state.value1 = value
    },
    initTask(state) {
        const chooseOperation = () => {
            if ( state.choosenOperations.length === 0 )
                alert("Please return and choose operations to play")
            else return state.choosenOperations[
                Math.floor(Math.random() * state.choosenOperations.length)]
        }

        const computeResult = (value1, value2, operation) => {
            switch(operation) {
                case "Addition":
                    state.value2 = value2
                    state.result = value1 + value2
                    state.operation = '+'
                    break
                case "Subtraction":
                    state.value2 = Math.min(value1, value2)
                    state.result = Math.ceil(
                        Math.max(value1, value2) - Math.min(value1, value2))
                    state.operation = '-'
                    break
                case "Multiplication":
                    state.value2 = value2
                    state.result = value1 * value2
                    state.operation = '*'
                    break
                case "Division":
                    value2 = Math.max(Math.floor(value2 / 10), 1)
                    state.value2 = Math.min(value1, value2)
                    state.result = Math.ceil(
                        Math.max(value1, value2) / Math.min(value1, value2))
                    state.operation = '/'
                    break
                default:
                    break
            }
        }
        let
            value1 = Math.floor(Math.random() * 10 ** +state.complexity),
            value2 = Math.floor(Math.random() * 10 ** +state.complexity)
        state.value1 = 0;
        computeResult(value1, value2, chooseOperation())
    },
    check (state) {
        if ( !state.finished ) {
            if (+eval(`${state.value1}${state.operation}${state.value2}`) === +state.result) {
                state.rights++
                state.globalRights++
            } else {
                state.wrongs++
                state.globalWrongs++
            }
        }
    },
    changeCounter (state, value) {
        state.counter = value
    },
    on (state) {
        state.on = true
    },
    off (state) {
        state.on = false
    },
    finished ( state ) {
        state.finished = true
        state.on = false
    },
    started ( state ) {
        state.finished = false
        state.counter = 0
        state.rights = 0
        state.wrongs = 0
    },
    save ( state ) {
        Object.keys(state).map(key => localStorage[key] = state[key])
    },
}
