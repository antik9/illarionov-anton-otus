<template>
    <div>
        <ContainerApp /><br />
        <TimerApp />
    </div>
</template>

<script>
import ContainerApp from './Container.vue'
import TimerApp from './Timer.vue'

export default {
    components: {
        ContainerApp,
        TimerApp,
    }
}
</script>
