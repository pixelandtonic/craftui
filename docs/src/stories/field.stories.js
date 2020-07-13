import Field from '../../../src/components/Field'
import {withKnobs, text, array, boolean} from '@storybook/addon-knobs'

export default {
    title: 'Components/Field',
    component: Field,
    decorators: [withKnobs],
}

export const Default = () => ({
    components: {Field},
    template: `
        <field
                :vertical="vertical"
                :errors="errors"
                :instructions="instructions"
                :label="label"
        >{{slotContent}}</field>`,
    props: {
        vertical: {
            type: Boolean,
            default: boolean('vertical', false)
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
        slotContent: {
            type: String,
            default: text('slot', 'Use the default slot to add an input or an element.')
        },
    },
})
