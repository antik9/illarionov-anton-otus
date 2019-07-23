<template>
    <div>
        <input :id="label" type="checkbox" :checked="checked"  v-on:click="(event) => onClick(event)"/>
        <label :for="label">{{ label }}</label>
    </div>
</template>

<script>
import store from '../store.js'

export default {
    props: ['label', 'checked'],
    methods: {
        onClick(event) {
            if (event.target.checked) {
                store.commit('addOperation', this.label)
            } else {
                store.commit('removeOperation', this.label)
            }
        }
    }
}
</script>
