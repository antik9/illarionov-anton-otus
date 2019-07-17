import Vue from 'vue';

let ButtonApp  = Vue.component('button-app', {
    render(createElement) {
        return createElement('div', [
            createElement('br'),
            createElement('button', {
                on: {
                    click: function() {
                        let complexity = document.getElementById('complexity-range').value
                        let minutes = document.getElementById('time-range').value
                        let operations = [
                            'Addition', 'Subtraction', 'Multiplication', 'Division', 'Power'
                        ].filter(
                            name => document.getElementById(`checkbox-${name}`).checked
                        ).join(', ');

                        let message = `
    Start game with complexity ${complexity} for ${minutes} minutes.
    Choosen operations: ${operations}`;
                        alert(message)
                    }
                }
            }, 'Play')
        ])
    }
})

export default ButtonApp;
