import Icon from '../../../src/components/Icon'
import {withKnobs, select} from '@storybook/addon-knobs'
import icons from '../../../src/icons/craft/regular'

export default {
    title: 'Components/Icon',
    component: Icon,
    decorators: [withKnobs],
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
