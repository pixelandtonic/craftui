/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import PaneNotesMD from '../notes/Pane.md'
import {array, boolean, text} from '@storybook/addon-knobs';

storiesOf('Components|Pane', module)
    .add('Default', () => ({
        template: `<pane :padded="padded">{{slot}}</pane>`,
        props: {
            padded: {
                type: Boolean,
                default: boolean('padded', true)
            },
            slot: {
                type: String,
                default: text('slot', 'Use the default slot to add an input or an element.')
            },
        },
    }), { notes: { markdown: PaneNotesMD } })
