import SemanticColorsApp from './colors/SemanticColors.vue'
import BaseApp from './colors/Base.vue'
import AlertsApp from './colors/Alerts.vue'
import BackgroundsApp from './colors/Backgrounds.vue'
import FieldsApp from './colors/Fields.vue'
import GradientsApp from './colors/Gradients.vue'
import InteractiveApp from './colors/Interactive.vue'
import SeparatorsApp from './colors/Separators.vue'
import ShadowsApp from './colors/Shadows.vue'
import TextApp from './colors/Text.vue'

export default {
    title: 'Colors',
}

export const SemanticColors = () => ({
    render: h => h(SemanticColorsApp),
})

export const Base = () => ({
    render: h => h(BaseApp),
})

export const Alerts = () => ({
    render: h => h(AlertsApp),
})

export const Backgrounds = () => ({
    render: h => h(BackgroundsApp),
})

export const Fields = () => ({
    render: h => h(FieldsApp),
})

export const Gradients = () => ({
    render: h => h(GradientsApp),
})

export const Interactive = () => ({
    render: h => h(InteractiveApp),
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
