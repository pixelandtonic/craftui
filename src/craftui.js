import CraftIcons from './plugins/icons'
import CraftComponents from './components'
import Btn from './components/Btn.vue';
import Checkbox from './components/Checkbox.vue';
import Dropdown from './components/Dropdown.vue';
import Field from './components/Field.vue';
import Icon from './components/Icon.vue';
import Lightswitch from './components/Lightswitch.vue';
import Radio from './components/Radio.vue';
import Spinner from './components/Spinner.vue';
import Textbox from './components/Textbox.vue';

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

export {
    Btn,
    Checkbox,
    Dropdown,
    Field,
    Icon,
    Lightswitch,
    Radio,
    Spinner,
    Textbox,
}