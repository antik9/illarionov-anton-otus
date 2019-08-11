import VueRouter from 'vue-router'
import SettingsApp from './vue/Settings.vue'
import GameApp from './vue/Game.vue'

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: SettingsApp },
        { path: '/play', component: GameApp },
    ]
})

export default router
