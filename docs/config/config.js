/* Craft UI */
import Vue from 'vue'
import '../src/sass/storybook.scss';
import CraftUi from '../../src/index'
Vue.use(CraftUi)

/* Stories */

/* eslint-disable import/no-extraneous-dependencies */
import { configure } from '@storybook/vue'

const req = require.context('../src/stories', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
