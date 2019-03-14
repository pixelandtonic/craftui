/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import LightswitchNotesMD from '../notes/Lightswitch.md'
import {array, boolean, text} from '@storybook/addon-knobs';

storiesOf('Components|Lightswitch', module)
    .add('Default', () => ({
        template: `<lightswitch 
                        :checked="checked"
                        :disabled="disabled"
                        :errors="errors"
                        :id="id"
                        :instructions="instructions" 
                        :label="label" 
                   />`,
        props: {
            checked: {
                type: Boolean,
                default: boolean('checked', false)
            },
            disabled: {
                type: Boolean,
                default: boolean('disabled', false)
            },
            errors: {
                type: Array,
                default: array('errors', [])
            },
            id: {
                type: String,
                default: text('id', '')
            },
            instructions: {
                type: String,
                default: text('instructions', 'Some instructions.')
            },
            label: {
                type: String,
                default: text('label', 'Label')
            },
        },
    }), { notes: { markdown: LightswitchNotesMD } })