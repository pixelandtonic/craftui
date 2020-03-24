import {Checkbox} from '../../../dist/craftui.esm'
import CheckboxNotesMD from '../notes/Checkbox.md'
import {withKnobs, text, boolean, array} from '@storybook/addon-knobs'

export default {
    title: 'Components/Checkbox',
    decorators: [withKnobs],
    parameters: {notes: {markdown: CheckboxNotesMD}},
}

export const Default = () => ({
    components: {Checkbox},
    template: `
        <checkbox
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
})
