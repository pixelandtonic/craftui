import Spinner from '../../../src/components/Spinner'
import {withKnobs, select} from '@storybook/addon-knobs'
import {withA11y} from '@storybook/addon-a11y'

export default {
    title: 'Components/Spinner',
    component: Spinner,
    decorators: [withKnobs, withA11y],
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
