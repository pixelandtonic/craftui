/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import DropdownNotesMD from '../notes/Dropdown.md'
import {array, boolean, text} from '@storybook/addon-knobs';

storiesOf('Components|Dropdown', module)
    .add('Default', () => ({
        template: `<dropdown 
                        :disabled="disabled" 
                        :errors="errors" 
                        :instructions="instructions" 
                        :label="label" 
                        :options="options" 
                        :value="value" 
                   />`,
        data() {
            return {
                options: [
                    {
                        label: "One",
                        value: 'one'
                    },
                    {
                        label: "Two",
                        value: 'two'
                    },
                    {
                        label: "Three",
                        value: 'three'
                    }
                ]
            }
        },
        props: {
            disabled: {
                type: Boolean,
                default: boolean('disabled', false)
            },
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
            value: {
                type: String,
                default: text('value', 'one')
            },
        },
    }), { notes: { markdown: DropdownNotesMD } })