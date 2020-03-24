import CraftIcons from './plugins/icons'
import CraftComponents from './components'

export default {
    install(Vue) {
        Vue.use(CraftIcons)

        // Craft Components
        Object.keys(CraftComponents).forEach(name => {
            Vue.component(name, CraftComponents[name])
        })
    }
}

export * from './components'