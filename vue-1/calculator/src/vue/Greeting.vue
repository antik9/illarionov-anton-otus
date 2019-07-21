<template>
    <div>
        <div style="font-size:30px;">Hello!</div><br/>
        <div>Welcome to your {{ store.getters.trainingDay }} training day,</div>
        <div>Your last result is {{ store.getters.rights }} from {{ store.getters.rights + store.getters.wrongs }} tasks.</div>
        <div>Compound accuracy: {{ store.getters.accuracy * 100 }}%</div><br/>
    </div>
</template>

<script>
import store from '../store.js'

export default {
    data() {
        return {
            store: store,
        }
    },
}
</script>
