<template>
    <table>
        <tbody>
            <tr>
                <td style="text-align:left">{{ minValue }}</td>
                <td style="text-align:right">{{ maxValue }}</td>
            </tr>
            <tr>
                <td colspan="2">
                    <input
                        type="range"
                        :min="minValue" :max="maxValue" :value="value"
                        v-on:input="(event) => onInput(event)"
                    >
                </td>
            </tr>
            <tr>
                <td colspan="2" id="duration-message" style="text-align:center">{{ message }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import store from '../store.js'

export default {
    props: ['params'],
    computed: {
        message() {
            return `Complexity ${this.value}`
        }
    },
    data() {
        return {
            value: store.getters.complexity,
            minValue: store.getters.minComplexity,
            maxValue: store.getters.maxComplexity,
        }
    },
    methods: {
        onInput(event) {
            store.commit('changeComplexity', event.target.value)
            this.value = store.getters.complexity
        }
    }
}
</script>
