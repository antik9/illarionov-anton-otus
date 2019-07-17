import Vue from 'vue';

let CallbackApp = Vue.component('callback-app', {
    props: ['callback', 'value', 'color'],
    render(createElement) {
        let self = this;
        return createElement('td', {
            style: {
                'border-radius': '20px',
                'background-color': this.color, // '#e7e9ea',
                'width': '40px',
                'text-align': 'center'
            },
            on: {
                click: function() {
                    self.callback(self.value);
                }
            }
        }, this.value)
    }
})

export default CallbackApp;
