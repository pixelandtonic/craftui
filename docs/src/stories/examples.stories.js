import FormsApp from './examples/Forms.vue'
import BadgesApp from './examples/Badges.vue'
import PanesApp from './examples/Panes.vue'

export default {
    title: 'Examples',
}

export const Forms = () => ({
    render: h => h(FormsApp),
})

export const Badges = () => ({
    render: h => h(BadgesApp),
})

export const Panes = () => ({
    render: h => h(PanesApp),
})

