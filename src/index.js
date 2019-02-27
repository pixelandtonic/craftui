import CraftIcons from './icons'
import CraftComponents from './components'

import './sass/styles.scss'

export default {
    install(Vue) {
        Vue.use(CraftIcons)

        // Craft Components
        Object.keys(CraftComponents).forEach(name => {
            Vue.component(name, CraftComponents[name])
        })
    }
}
