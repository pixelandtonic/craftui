import {Field} from '../../../dist/craftui.esm'
import FieldNotesMD from '../notes/Field.md'
import {withKnobs, text, array} from '@storybook/addon-knobs'


export default {
    title: 'Components/Field',
    decorators: [withKnobs],
    parameters: {notes: {markdown: FieldNotesMD}},
}

export const Default = () => ({
    components: {Field},
    template: `
        <field
                :errors="errors"
                :instructions="instructions"
                :label="label"
        >{{slot}}</field>`,
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
        slot: {
            type: String,
            default: text('slot', 'Use the default slot to add an input or an element.')
        },
    },
})
