// Craft UI
import Vue from 'vue'
import CraftUi from '../../dist/craftui.es'
Vue.use(CraftUi)
import '../../dist/craftui.css'

// Styles
import '../src/sass/styles.scss'


// Stories

/* eslint-disable import/no-extraneous-dependencies */
import {configure, addDecorator} from '@storybook/vue'

// Knobs
import {withKnobs} from '@storybook/addon-knobs'
addDecorator(withKnobs)

// Notes
import {withNotes} from '@storybook/addon-notes'
addDecorator(withNotes)


// Options
import {setOptions} from '@storybook/addon-options'

setOptions({
    name: 'Craft UI',
    url: 'https://github.com/pixelandtonic/craftui',
    showStoriesPanel: true,
    hierarchySeparator: /\/|\./, // matches a . or /
    hierarchyRootSeparator: /\|/, //matches a |
})

// Load stories
function loadStories() {
    require('../src/stories')
    const req = require.context('../src/stories', true, /.stories.js$/)
    req.keys().forEach(filename => req(filename))
}

// Configure
configure(loadStories, module)
