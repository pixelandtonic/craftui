import Checkbox from '../../../src/components/Checkbox'
import {withKnobs, text, boolean} from '@storybook/addon-knobs'

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    decorators: [withKnobs],
}

export const Default = () => ({
    components: {Checkbox},
    template: `
        <checkbox
                :checked="checked"
                :disabled="disabled"
                :invalid="invalid"
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
        invalid: {
            type: Boolean,
            default: boolean('invalid', false)
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
