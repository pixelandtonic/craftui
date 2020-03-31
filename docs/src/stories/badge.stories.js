import Badge from '../../../src/components/Badge'
import {withKnobs, boolean, select, text} from '@storybook/addon-knobs'
import {withA11y} from '@storybook/addon-a11y'

export default {
    title: 'Components/Badge',
    component: Badge,
    decorators: [withKnobs, withA11y],
}

export const Default = () => ({
    components: {Badge},
    template: `
        <badge
                :type="type"
                :large="large"
        >{{slotContent}}</badge>`,
    props: {
        large: {
            type: Boolean,
            default: boolean('large', false)
        },
        slotContent: {
            type: String,
            default: text('slot', 'Badge')
        },
        type: {
            type: String,
            default: select('type', ['default', 'success', 'info', 'warning', 'danger'], 'default')
        },
    },
});