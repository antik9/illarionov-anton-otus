<template>
    <div>
        <div style="font-size:30px;">Hello!</div><br/>
        <div>Welcome to your {{ trainingDay }} training day,</div>
        <div>Your last result is {{ rights }} from {{ +rights + +wrongs }} tasks.</div>
        <div>Compound accuracy: {{ accuracy * 100 }}%</div><br/>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
    computed: {
        ...mapState(['rights', 'wrongs']),
        ...mapGetters(['accuracy', 'trainingDay']),
    }
}
</script>
