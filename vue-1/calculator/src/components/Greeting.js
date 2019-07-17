import Vue from 'vue';

let GreetingApp  = Vue.component('greeeting-app', {
    data: function() {
        return {
            trainingDay: 8,
            lastSolved: 4,
            numTasks: 10,
            accuracy: .65
        }
    },
    render(createElement) {
        return createElement('div', [
            createElement('div', {
                style: {
                    'font-size': '25px'
                }
            }, 'Hello!'),
            createElement('br'),
            createElement('div', `Welcome to your ${this.trainingDay} training day,`),
            createElement('div', `Your last result is ${this.lastSolved} from ${this.numTasks} tasks.`),
            createElement('div', `Compound accuracy: ${this.accuracy * 100}%`),
            createElement('br')
        ])
    }
})

export default GreetingApp;
