import Pane from '../../../src/components/Pane'
import {withKnobs, text, boolean} from '@storybook/addon-knobs'
import {withA11y} from '@storybook/addon-a11y'

export default {
    title: 'Components/Pane',
    component: Pane,
    decorators: [withKnobs, withA11y],
}

export const Default = () => ({
    components: {Pane},
    template: `
        <pane :padded="padded">{{slotContent}}</pane>`,
    props: {
        padded: {
            type: Boolean,
            default: boolean('padded', true)
        },
        slotContent: {
            type: String,
            default: text('slot', 'Use the default slot to add an input or an element.')
        },
    },
})
