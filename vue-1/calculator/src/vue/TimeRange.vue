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
    computed: {
        message: function() {
            return `For ${this.value} minutes`
        },
    },
    data: function() {
        return {
            value: store.getters.timeValue,
            minValue: store.getters.minTime,
            maxValue: store.getters.maxTime,
        }
    },
    methods: {
        onInput(event) {
            store.commit('changeTime', event.target.value)
            this.value = store.getters.timeValue
        }
    }
}
</script>
