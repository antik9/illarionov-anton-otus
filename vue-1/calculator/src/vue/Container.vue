<template>
    <div>
        <div v-on:click='goBack()' style="font-size:20px;border-style:solid;width:40px;text-align:center">⇦</div><br />
        <div style="font-size:16px">
            Your result: {{ rights }} right and {{ wrongs }} wrong
        </div><br />
        <div style="font-size:22px;text-align:center;width:210px;color:black;border-style:dashed;border-radius:10px;border-width:1px;border-color:#ccc">
            <span style="color: #f77">{{ value1 }}</span>
            <span> {{ operation }} </span>
            <span style="color: pink">{{ value2 }}</span>
            <span> = </span>
            <span style="color: pink">{{ result }}</span>
        </div><br/>
        <table>
            <tbody>
                <tr v-for="row in [0, 1, 2]">
                    <td v-for="value in [1, 2, 3]">
                        <CallbackApp :value="row * 3 + value" :callback="setValue" color="#f7c9ab"/>
                    </td>
                </tr>
                <tr>
                    <td><CallbackApp value="del" :callback="delNumber" color="#e7e9ea"/></td>
                    <td><CallbackApp value="0" :callback="setValue" color="#f7c9ab"/></td>
                    <td><CallbackApp value="check" :callback="check" color="#e7e9ea"/></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import CallbackApp from './Callback.vue'
import router from '../router.js'
import store from '../store.js'

export default {
    computed: {
        ...mapState([
            'value1', 'value2', 'result', 'operation', 'rights', 'wrongs', 'finished',
        ]),
    },
    methods: {
        setValue(number) {
            store.commit('setValue', this.value1 * 10 + +number)
        },
        delNumber() {
            store.commit('setValue', Math.floor(this.value1 / 10))
        },
        check() {
            store.commit('check')
            store.commit('save')
            if ( !this.finished )
                store.commit('initTask')
        },
        goBack() {
            store.commit('finished')
            router.push({path: '/'})
        },
    },
    components: {
        CallbackApp,
    },
    mounted() {
        store.commit('initTask')
    }
}
</script>
