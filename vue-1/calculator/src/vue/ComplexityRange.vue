<template>
    <table>
        <tbody>
            <tr>
                <td style="text-align:left">{{ minComplexity }}</td>
                <td style="text-align:right">{{ maxComplexity }}</td>
            </tr>
            <tr>
                <td colspan="2">
                    <input
                        type="range"
                        :min="minComplexity" :max="maxComplexity" :value="complexity"
                        v-on:input="(event) => onInput(event)"
                    >
                </td>
            </tr>
            <tr>
                <td colspan="2" id="duration-message" style="text-align:center">Complexity {{ complexity }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import store from '../store.js'
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState(['complexity', 'minComplexity', 'maxComplexity']),
    },
    methods: {
        onInput(event) {
            store.commit('changeComplexity', event.target.value)
        }
    }
}
</script>
