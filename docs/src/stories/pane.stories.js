import {Pane} from '../../../dist/craftui.esm'
import PaneNotesMD from '../notes/Pane.md'
import {withKnobs, text, boolean} from '@storybook/addon-knobs'

export default {
    title: 'Components/Pane',
    decorators: [withKnobs],
    parameters: {notes: {markdown: PaneNotesMD}},
}

export const Default = () => ({
    components: {Pane},
    template: `
        <pane :padded="padded">{{slot}}</pane>`,
    props: {
        padded: {
            type: Boolean,
            default: boolean('padded', true)
        },
        slot: {
            type: String,
            default: text('slot', 'Use the default slot to add an input or an element.')
        },
    },
})
