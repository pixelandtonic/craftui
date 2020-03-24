import {Icon} from '../../../dist/craftui.esm'
import IconNotesMD from '../notes/Icon.md'
import {withKnobs, select} from '@storybook/addon-knobs'
import icons from '../../../src/sprites/icons'

export default {
    title: 'Components/Icon',
    decorators: [withKnobs],
    parameters: {notes: {markdown: IconNotesMD}},
}

export const Default = () => ({
    components: {Icon},
    template: `<icon :icon="icon" :size="size"></icon>`,
    props: {
        icon: {
            type: String,
            default: select('icon', icons, 'glass-martini')
        },
        size: {
            type: String,
            default: select('size', ['sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'], '5xl')
        },
    },
})
