// Craft UI
import Vue from 'vue'
import CraftUi from '../../dist/craftui.standalone.esm'
Vue.use(CraftUi)
import '../../dist/craftui.standalone.css'

// Styles
import '../src/sass/styles.scss'

import craftuiLight from './themes/craftui-light'
import craftuiDark from './themes/craftui-dark'

import {addDecorator, addParameters} from '@storybook/vue'
import {withDirection} from 'storybook-rtl-addon/dist';

addDecorator(withDirection)

addParameters({
    darkMode: {
        light: craftuiLight,
        dark: craftuiDark,
    }
});
