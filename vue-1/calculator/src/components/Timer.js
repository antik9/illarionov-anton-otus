import Vue from 'vue';

let TimerApp = Vue.component('timer-app', {
    data: function() {
        return {
            time: 10,
            counter: 0,
            now: new Date().getTime(),
            on: false,
        }
    },
    methods: {
        timeout: function(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        },
        swap: function() {
            if (this.on) this.stop();
            else this.countDown();
            this.on = !this.on;
        },
        countDown: async function() {
            this.now = new Date().getTime();
            let previous = this.now;
            this.counter = 0;
            while(true) {
                if (this.now !== previous || this.counter >= this.time) break;
                this.counter = Math.min(
                    Math.floor((new Date().getTime() - previous) / 1000),
                    this.time
                );
                await this.timeout(500);
            }
        },
        stop: function() {
            this.counter = this.time;
        }
    },
    render: function(createElement) {
        let self = this;
        return createElement('div', {
            on: {
                click: function() {
                    self.swap();
                },
            },
            style: {
                width: "130px",
                'background': `
                    linear-gradient(
                        90deg,
                        pink ${this.counter/this.time*100}%,
                        white 0%)`,
                'text-align': 'center',
            }
        }, this.counter)
    }
})

export default TimerApp;
