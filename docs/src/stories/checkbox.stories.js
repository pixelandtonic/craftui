/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import CheckboxNotesMD from '../notes/Checkbox.md'
import {text, boolean, select, array} from '@storybook/addon-knobs'

storiesOf('Components|Checkbox', module)
    .add('Default', () => ({
        template: `<checkbox 
                        :checked="checked" 
                        :disabled="disabled" 
                        :errors="errors" 
                        :label="label" 
                        :value="value" 
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
            label: {
                type: String,
                default: text('label', 'Label')
            },
            value: {
                type: String,
                default: text('value', '1')
            },
        },
    }), { notes: { markdown: CheckboxNotesMD } })
