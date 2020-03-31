import FormsApp from './Forms.vue'
import BadgesApp from './Badges.vue'
import {withA11y} from '@storybook/addon-a11y'

export default {
    title: 'Examples',
    decorators: [withA11y]
}

export const Forms = () => ({
    render: h => h(FormsApp),
})

export const Badges = () => ({
    render: h => h(BadgesApp),
})

