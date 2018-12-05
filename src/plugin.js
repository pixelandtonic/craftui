import Vue from 'vue'
import CraftComponents from './components'

export function install (Vue, options = {}) {
    Object.keys(CraftComponents).forEach(name => {
        Vue.component(name, CraftComponents[name])
    })
}

const plugin = {
    install,
}

export default plugin