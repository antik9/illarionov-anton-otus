<template>
    <table>
        <tbody>
            <tr>
                <td style="text-align:left">{{ minTime }}</td>
                <td style="text-align:right">{{ maxTime }}</td>
            </tr>
            <tr>
                <td colspan="2">
                    <input
                        type="range"
                        :min="minTime" :max="maxTime" :value="timeValue"
                        v-on:input="(event) => onInput(event)"
                    >
                </td>
            </tr>
            <tr>
                <td colspan="2" id="duration-message" style="text-align:center">For {{ timeValue }} minutes</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { mapState } from 'vuex'
import store from '../store.js'

export default {
    computed: {
        ...mapState(['timeValue', 'minTime', 'maxTime']),
    },
    methods: {
        onInput(event) {
            store.commit('changeTime', event.target.value)
        }
    }
}
</script>
