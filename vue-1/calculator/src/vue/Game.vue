<template>
    <div>
        <container-app /><br />
        <timer-app />
    </div>
</template>

<script>
import ContainerApp from './Container.vue'
import TimerApp from './Timer.vue'

export default {
    components: {
        'container-app': ContainerApp,
        'timer-app': TimerApp,
    }
}
</script>
