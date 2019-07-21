<template>
    <div>
        <greeting-app />
        <h2>Settings</h2>
        <timerange-app />
        <complexity-app /><br />
        <checkbox-app label="Addition" :checked="store.getters.checkedAddition"/>
        <checkbox-app label="Subtraction" :checked="store.getters.checkedSubtraction"/>
        <checkbox-app label="Multiplication" :checked="store.getters.checkedMultiplication"/>
        <checkbox-app label="Division" :checked="store.getters.checkedDivision"/>
        <br />
        <button v-on:click="startGame()">Play</button><br />
    </div>
</template>

<script>
import CheckBoxApp from './CheckBox.vue'
import ComplexityRangeApp from './ComplexityRange.vue'
import GreetingApp from './Greeting.vue'
import TimeRangeApp from './TimeRange.vue'
import router from '../router.js'
import store from '../store.js'

export default {
    data() {
        return {
            store: store,
        }
    },
    components: {
        'checkbox-app': CheckBoxApp,
        'complexity-app': ComplexityRangeApp,
        'greeting-app': GreetingApp,
        'timerange-app': TimeRangeApp,
    },
    methods: {
        startGame() {
            store.commit('started')
            router.push({
                path: 'play',
            })
        }
    }
}
</script>
