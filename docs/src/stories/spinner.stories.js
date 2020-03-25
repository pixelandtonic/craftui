import Spinner from '../../../src/components/Spinner'
import {withKnobs, select} from '@storybook/addon-knobs'

export default {
    title: 'Components/Spinner',
    component: Spinner,
    decorators: [withKnobs],
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
