import AlertsApp from './examples/Alerts.vue'
import BackgroundsApp from './examples/Backgrounds.vue'
import BadgesApp from './examples/Badges.vue'
import ButtonsApp from './examples/Buttons.vue'
import FieldsApp from './examples/Fields.vue'
import FormsApp from './examples/Forms.vue'
import GradientsApp from './examples/Gradients.vue'
import LinksApp from './examples/Links.vue'
import PanesApp from './examples/Panes.vue'
import SeparatorsApp from './examples/Separators.vue'
import ShadowsApp from './examples/Shadows.vue'
import TextApp from './examples/Text.vue'

export default {
    title: 'Examples',
}

export const Alerts = () => ({
    render: h => h(AlertsApp),
})

export const Backgrounds = () => ({
    render: h => h(BackgroundsApp),
})

export const Badges = () => ({
    render: h => h(BadgesApp),
})

export const Buttons = () => ({
    render: h => h(ButtonsApp),
})

export const Fields = () => ({
    render: h => h(FieldsApp),
})

export const Forms = () => ({
    render: h => h(FormsApp),
})

export const Gradients = () => ({
    render: h => h(GradientsApp),
})

export const Links = () => ({
    render: h => h(LinksApp),
})

export const Panes = () => ({
    render: h => h(PanesApp),
})

export const Separators = () => ({
    render: h => h(SeparatorsApp),
})

export const Shadows = () => ({
    render: h => h(ShadowsApp),
})

export const Text = () => ({
    render: h => h(TextApp),
})