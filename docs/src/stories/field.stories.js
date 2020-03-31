import Field from '../../../src/components/Field'
import {withKnobs, text, array} from '@storybook/addon-knobs'
import {withA11y} from '@storybook/addon-a11y'

export default {
    title: 'Components/Field',
    component: Field,
    decorators: [withKnobs, withA11y],
}

export const Default = () => ({
    components: {Field},
    template: `
        <field
                :errors="errors"
                :instructions="instructions"
                :label="label"
        >{{slotContent}}</field>`,
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
        slotContent: {
            type: String,
            default: text('slot', 'Use the default slot to add an input or an element.')
        },
    },
})
