import {Spinner} from '../../../dist/craftui.esm'
import SpinnerNotesMD from '../notes/Spinner.md'
import {withKnobs, select} from '@storybook/addon-knobs'

export default {
    title: 'Components/Spinner',
    decorators: [withKnobs],
    parameters: {notes: {markdown: SpinnerNotesMD}},
}

export const Default = () => ({
    components: {Spinner},
    template: `<spinner :size="size"></spinner>`,
    props: {
        size: {
            type: String,
            default: select('size', ['sm', 'base', 'lg'], 'base')
        },
    },
})
