import Alert from '../../../src/components/Alert'
import {withKnobs, boolean, select, text} from '@storybook/addon-knobs'

export default {
    title: 'Components/Alert',
    component: Alert,
    decorators: [withKnobs],
}

export const Default = () => ({
    components: {Alert},
    template: `
        <alert
                :kind="kind"
        >{{slotContent}}</alert>`,
    props: {
        slotContent: {
            type: String,
            default: text('slot', 'A new software update is available. See what’s new in version 3.5.')
        },
        kind: {
            type: String,
            default: select('type', ['info', 'success', 'warning', 'danger'], 'info')
        },
    },
});