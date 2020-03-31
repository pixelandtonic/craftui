import Icon from '../../../src/components/Icon'
import {withKnobs, select} from '@storybook/addon-knobs'
import {withA11y} from '@storybook/addon-a11y'
import icons from '../../../src/sprites/icons'

export default {
    title: 'Components/Icon',
    component: Icon,
    decorators: [withKnobs, withA11y],
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
            default: select('size', ['sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'], 'base')
        },
    },
})
