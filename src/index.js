import CraftComponents from './components'

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCoffee, faTimes, faTh, faBars, faPlus, faKey, faPlug, faImage, faUser, faPencilAlt, faExclamationTriangle, faBug, faShoppingCart, faDollarSign, faHandshake, faLink, faCheck, faBook, faSearch, faCopy } from '@fortawesome/free-solid-svg-icons'
// @import '~@fortawesome/fontawesome-svg-core/styles.css';
import './sass/styles.scss'

export default {
    install(Vue) {
        // Craft Components
        Object.keys(CraftComponents).forEach(name => {
            Vue.component(name, CraftComponents[name])
        })


        config.autoAddCss = false
        library.add([faCoffee, faTimes, faTh, faBars, faPlus, faKey, faPlug, faImage, faUser, faPencilAlt, faExclamationTriangle, faBug, faShoppingCart, faDollarSign, faHandshake, faLink, faCheck, faBook, faSearch, faCopy])

        // Font Awesome
        Vue.component('font-awesome-icon', FontAwesomeIcon)
    }
}
