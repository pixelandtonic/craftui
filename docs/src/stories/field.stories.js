/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import FieldNotesMD from '../notes/Field.md'
import {array, boolean, text} from '@storybook/addon-knobs';

storiesOf('Components|Field', module)
    .add('Default', () => ({
        template: `<field 
                        :errors="errors"
                        :instructions="instructions"
                        :label="label" 
                   >{{slot}}</field>`,
        props: {
            errors: {
                type: Array,
                default: array('errors', [])
            },
            instructions: {
                type: String,
                default: text('instructions', 'Some instructions.')
            },
            label: {
                type: String,
                default: text('label', 'Label')
            },
            slot: {
                type: String,
                default: text('slot', 'Use the default slot to add an input or an element.')
            },
        },
    }), { notes: { markdown: FieldNotesMD } })
