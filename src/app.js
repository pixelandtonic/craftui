import CraftComponents from './components'

// import { library, config } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faCoffee, faTimes, faTh, faBars, faPlus, faKey, faPlug, faImage, faUser, faPencilAlt, faExclamationTriangle, faBug, faShoppingCart, faDollarSign, faHandshake, faLink, faCheck, faBook, faSearch, faCopy } from '@fortawesome/free-solid-svg-icons'

export default {
    install(Vue) {
        // Craft Components
        Object.keys(CraftComponents).forEach(name => {
            Vue.component(name, CraftComponents[name])
        })
        //
        // config.autoAddCss = false
        // library.add([faCoffee, faTimes, faTh, faBars, faPlus, faKey, faPlug, faImage, faUser, faPencilAlt, faExclamationTriangle, faBug, faShoppingCart, faDollarSign, faHandshake, faLink, faCheck, faBook, faSearch, faCopy])
        //
        // // Font Awesome
        // Vue.component('font-awesome-icon', FontAwesomeIcon)
    }
}

// export default CraftUi;

//
// import Vue from "vue"
// import Test from './components/Test.vue'
//
// const Components = {
//     Test,
// }
//
// Vue.component('test', Test)
//
// export default Components