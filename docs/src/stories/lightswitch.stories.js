import Lightswitch from '../../../src/components/Lightswitch'
import {withKnobs, text, boolean, array} from '@storybook/addon-knobs'

export default {
    title: 'Components/Lightswitch',
    component: Lightswitch,
    decorators: [withKnobs],
}

export const Default = () => ({
    components: {Lightswitch},
    template: `
        <lightswitch
                :checked="checked"
                :disabled="disabled"
                :errors="errors"
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
        instructions: {
            type: String,
            default: text('instructions', 'Some instructions.')
        },
        label: {
            type: String,
            default: text('label', 'Label')
        },
    },
})
