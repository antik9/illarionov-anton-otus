<template>
    <div
        style="width:208px;text-align:center;border-style:solid;border-color:pink"
        :style="{'background': gradient}"
        v-on:click="reset()"
    >Click to pause {{ timedCounter }}</div>
</template>

<script>
import store from '../store.js'

export default {
    computed: {
        gradient() {
            return `linear-gradient(90deg, pink ${(store.getters.counter)/(this.time) * 100}%, white 0%)`
        },
        timedCounter() {
            let
                minutes = Math.floor(store.getters.timeValue - store.getters.counter / 60),
                seconds = Math.min(60 - store.getters.counter % 60);
            seconds = seconds === 60 ? 0 : seconds;
            return `${minutes}:${("0" + seconds).slice(-2)}`
        }
    },
    data() {
        return {
            time: +store.getters.timeValue * 60,
        }
    },
    methods: {
        timeout(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        },
        async countDown() {
            store.commit('on')
            let previous = store.getters.counter
            let start = new Date().getTime()
            while( store.getters.on && store.getters.counter < this.time ) {
                let counter = previous + (new Date().getTime() - start) / 1000
                counter = Math.round(Math.min(counter, this.time))
                store.commit('changeCounter', counter)
                if ( store.getters.counter >= this.time) break;
                await this.timeout(500);
            }
            if ( store.getters.counter >= this.time ) {
                store.commit('finished')
            }
        },
        reset() {
            if ( store.getters.on ) {
                store.commit('off')
            } else {
                store.commit('on')
                this.countDown()
            }
        }
    },
    mounted() {
        this.countDown()
    },
}
</script>
