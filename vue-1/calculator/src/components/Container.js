import Vue from 'vue';
import CallbackApp from './Callback.js';

let ContainerApp = Vue.component('container-app', {
    data: function() {
        return {
            value1: 0,
            value2: 0,
            swap: false
        }
    },
    methods: {
        setValue: function(number) {
            if (this.swap) {
                this.value2 = this.value2 * 10 + number;
            } else {
                this.value1 = this.value1 * 10 + number;
            }
        },
        makeSwap: function() {
            this.swap = !this.swap;
        },
        delNumber: function() {
            if (this.swap) {
                this.value2 = Math.floor(this.value2 / 10);
            } else {
                this.value1 = Math.floor(this.value1 / 10);
            }
        },
        check: function() {
            if (this.value1 + this.value2 === 100) {
                alert(':)');
            } else {
                alert(':(');
            }
        }
    },
    render(createElement) {
        let self = this;
        return createElement('div', {
        }, [
            createElement('div', [
                createElement('span', self.value1),
                createElement('span', ' + '),
                createElement('span', self.value2),
                createElement('span', ' = 100')
            ]),
            createElement('br'),
            createElement('table', [
                createElement('tbody', [
                    [0, 1, 2].map(row =>
                        createElement('tr', [
                            [1, 2, 3].map(value =>
                                createElement(CallbackApp, {
                                    props: {
                                        value: row * 3 + value,
                                        callback: self.setValue,
                                        color: '#f7c9ab',
                                    }
                                })
                            )
                        ])
                    ).concat(
                        createElement('tr', [
                            createElement(CallbackApp, {
                                props: {
                                    callback: self.makeSwap,
                                    value: '<',
                                    color: '#b7c9fb',
                                }
                            }),
                            createElement(CallbackApp, {
                                props: {
                                    value: 0,
                                    callback: self.setValue,
                                    color: '#f7c9ab',
                                }
                            }),
                            createElement(CallbackApp, {
                                props: {
                                    callback: self.makeSwap,
                                    value: '>',
                                    color: '#b7c9fb',
                                }
                            }),
                        ])
                    ).concat(
                        createElement('tr', [
                            createElement(CallbackApp, {
                                props: {
                                    callback: self.delNumber,
                                    value: 'del',
                                    color: '#e7e9ea',
                                }
                            }),
                            createElement(CallbackApp, {
                                props: {
                                    callback: self.check,
                                    value: 'check',
                                    color: '#e7e9ea',
                                }
                            }),
                        ])
                    )
                ])
            ])
        ])
    }
})

export default ContainerApp;
