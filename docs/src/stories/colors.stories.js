import SemanticColorsApp from './SemanticColors.vue'
import ColorExamplesApp from './ColorExamples.vue'

export default {
    title: 'Colors',
}

export const SemanticColors = () => ({
    render: h => h(SemanticColorsApp),
})

export const Examples = () => ({
    render: h => h(ColorExamplesApp),
})