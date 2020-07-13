import Dropdown from '../../../src/components/Dropdown'
import {withKnobs, text, boolean} from '@storybook/addon-knobs'

export default {
    title: 'Components/Dropdown',
    component: Dropdown,
    decorators: [withKnobs],
}

export const Default = () => ({
    components: {Dropdown},
    template: `<dropdown
            :disabled="disabled"
            :invalid="invalid"
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
        invalid: {
            type: Boolean,
            default: boolean('invalid', false)
        },
        value: {
            type: String,
            default: text('value', 'one')
        },
    },
})