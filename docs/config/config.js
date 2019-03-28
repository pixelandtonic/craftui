// Craft UI
import Vue from 'vue'
import CraftUi from '../../dist/craftui.es'
Vue.use(CraftUi)
import '../../dist/craftui.css'

// Styles
import '../src/sass/styles.scss'


// Stories

/* eslint-disable import/no-extraneous-dependencies */
import { configure, addDecorator } from '@storybook/vue'
import { setOptions } from '@storybook/addon-options'
import {withNotes} from '@storybook/addon-notes'
import {withKnobs} from '@storybook/addon-knobs'

addDecorator(withKnobs)

addDecorator(withNotes)

setOptions({
  name: 'Craft UI',
  url: 'https://github.com/pixelandtonic/craftui',
  showStoriesPanel: true,
  hierarchySeparator: /\/|\./, // matches a . or /
  hierarchyRootSeparator: /\|/, //matches a |
})


function loadStories() {
  require('../src/stories')

  const req = require.context('../src/stories', true, /.stories.js$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
