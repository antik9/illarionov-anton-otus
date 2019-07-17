import Vue from 'vue';

const createComponent = (createElement, that, id) => {
    let self = that;
    return createElement('table', [
        createElement('tbody', [
            createElement('tr', [
                createElement('td', {
                    style:{
                        'text-align': 'left'
                    },
                }, that.minValue),
                createElement('td', {
                    style: {
                        'text-align': 'right'
                    }
                }, that.maxValue)
            ]),
            createElement('tr', [
                createElement('td', {
                    attrs: {
                        colspan: '2'
                    }
                }, [
                    createElement('input', {
                        attrs: {
                            type: 'range',
                            id: id,
                            min: that.minValue,
                            max: that.maxValue,
                            value: that.value
                        },
                        on: {
                            input: function(event) {
                                self.value = event.target.value;
                            }
                        }
                    })
                ])
            ]),
            createElement('tr', [
                createElement('td', {
                    attrs: {
                        colspan: '2',
                        id: 'duration-message'
                    },
                    style: {
                        'text-align': 'center'
                    }
                }, self.message(self.value))
            ])
        ])
    ]);
}

let TimeRangeApp = Vue.component('time-range-app', {
    data: function() {
        return {
            value: 5,
            minValue: 1,
            maxValue: 15,
            message: (value) => `For ${value} minutes`
        }
    },
    render(createElement) {
        return createComponent(createElement, this, 'time-range');
    }
})

let ComplexityRangeApp = Vue.component('complexity-range-app', {
    data: function() {
        return {
            value: 5,
            minValue: 1,
            maxValue: 10,
            message: (value) => `Complexity ${value}`
        }
    },
    render(createElement) {
        return createComponent(createElement, this, 'complexity-range');
    }
})

export {TimeRangeApp, ComplexityRangeApp};
