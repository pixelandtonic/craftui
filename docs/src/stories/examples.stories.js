import FormsApp from './Forms.vue'
import BadgesApp from './Badges.vue'

export default {
    title: 'Examples',
}

export const Forms = () => ({
    render: h => h(FormsApp),
})

export const Badges = () => ({
    render: h => h(BadgesApp),
})

