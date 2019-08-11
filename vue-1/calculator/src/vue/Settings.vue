<template>
    <div>
        <GreetingApp />
        <h2>Settings</h2>
        <TimeRangeApp />
        <ComplexityRangeApp /><br />
        <CheckBoxApp label="Addition" :checked="checkedAddition"/>
        <CheckBoxApp label="Subtraction" :checked="checkedSubtraction"/>
        <CheckBoxApp label="Multiplication" :checked="checkedMultiplication"/>
        <CheckBoxApp label="Division" :checked="checkedDivision"/>
        <br />
        <button v-on:click="startGame()">Play</button><br />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CheckBoxApp from './CheckBox.vue'
import ComplexityRangeApp from './ComplexityRange.vue'
import GreetingApp from './Greeting.vue'
import TimeRangeApp from './TimeRange.vue'
import router from '../router.js'
import store from '../store.js'

export default {
    computed: {
        ...mapGetters([
            'checkedAddition', 'checkedSubtraction',
            'checkedMultiplication', 'checkedDivision'
        ]),
    },
    components: {
        CheckBoxApp,
        ComplexityRangeApp,
        GreetingApp,
        TimeRangeApp,
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
