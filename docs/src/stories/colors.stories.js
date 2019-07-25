/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import SemanticColors from './SemanticColors.vue'
import ColorExamples from './ColorExamples.vue'

storiesOf('Colors', module)
    .add('Semantic Colors', () => ({
        render: h => h(SemanticColors),
    }))
    .add('Examples', () => ({
        render: h => h(ColorExamples),
    }))

