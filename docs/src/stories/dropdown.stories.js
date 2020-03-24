import {Dropdown} from '../../../dist/craftui.esm'
import DropdownNotesMD from '../notes/Dropdown.md'
import {withKnobs, text, boolean, array} from '@storybook/addon-knobs'

export default {
    title: 'Components/Dropdown',
    decorators: [withKnobs],
    parameters: {notes: {markdown: DropdownNotesMD}},
}

export const Default = () => ({
    components: {Dropdown},
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
})