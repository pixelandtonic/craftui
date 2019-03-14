/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import IconNotesMD from '../notes/Icon.md'
import {select} from '@storybook/addon-knobs'
import icons from '../../../src/sprites/regular'

storiesOf('Components|Icon', module)
    .add('Default', () => ({
        template: `<icon :icon="icon" :size="size"></icon>`,
        props: {
            icon: {
                type: String,
                default: select('icon', icons, 'glass-martini-alt')
            },
            size: {
                type: String,
                default: select('size', ['sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'], '5xl')
            },
        },
    }), { notes: { markdown: IconNotesMD } })