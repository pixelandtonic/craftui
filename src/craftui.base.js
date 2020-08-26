import CraftComponents from './components'

export default {
    install(Vue) {
        // Craft Components
        Object.keys(CraftComponents).forEach(name => {
            Vue.component(name, CraftComponents[name])
        })
    }
}

export * from './components'