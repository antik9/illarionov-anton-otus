import Vue from 'vue'
import { TimeRangeApp, ComplexityRangeApp } from './components/Range.js';
import GreetingApp from './components/Greeting.js';
import CheckBoxApp from './components/CheckBox.js';
import ButtonApp from './components/Button.js';
import ContainerApp from './components/Container.js';
import TimerApp from './components/Timer.js';

Vue.config.productionTip = false

new Vue({
  render: function(createElement) {
      return createElement('div', [
          createElement(GreetingApp),
          createElement('h2', 'Settings'),
          createElement(TimeRangeApp),
          createElement(ComplexityRangeApp),
          createElement('br'),
          ['Addition', 'Subtraction', 'Multiplication', 'Division', 'Power'].map(
              name => createElement(CheckBoxApp, {
                props: {
                  label: name,
                  checked: false
                }
              })
          ),
          createElement(ButtonApp),
          createElement('br'),
          createElement(ContainerApp),
          createElement('br'),
          createElement(TimerApp),
      ])
  }
}).$mount('#app')
