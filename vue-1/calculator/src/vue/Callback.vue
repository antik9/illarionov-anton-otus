<template>
    <td
        style="border-radius:40px;width:60px;text-align:center;border-style:solid;border-color:gray;border-width:1px"
        :style="{'background-color': color}"
        v-on:click="onClick()"
    >{{ value }}</td>
</template>

<script>
export default {
    props: ['callback', 'value', 'color'],
    methods: {
        onClick() { this.callback(this.value) }
    }
}
</script>
