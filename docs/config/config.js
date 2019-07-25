// Craft UI
import Vue from 'vue'
import CraftUi from '../../dist/craftui.esm'
Vue.use(CraftUi)

// Styles
import '../src/sass/styles.scss'


// Stories

/* eslint-disable import/no-extraneous-dependencies */
import {configure, addDecorator, addParameters} from '@storybook/vue'

// Knobs
import {withKnobs} from '@storybook/addon-knobs'
addDecorator(withKnobs)

// Notes
import {withNotes} from '@storybook/addon-notes'
addDecorator(withNotes)

// Options
import { create } from '@storybook/theming'
addParameters({
    options: {
        theme: create({
            base: 'light',
            brandTitle: 'Craft UI',
            brandUrl: 'https://github.com/pixelandtonic/craftui',
        }),
        showNav: true,
        isFullscreen: false,
        isToolshown: true,
        hierarchySeparator: /\/|\./, // matches a . or /
        hierarchyRootSeparator: /\|/, //matches a |
    },
})

// Load stories
function loadStories() {
    require('../src/stories')
    const req = require.context('../src/stories', true, /.stories.js$/)
    req.keys().forEach(filename => req(filename))
}

// Configure
configure(loadStories, module)
