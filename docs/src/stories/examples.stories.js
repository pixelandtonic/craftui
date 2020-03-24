/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import SemanticColors from './SemanticColors.vue'
import Forms from './Forms.vue'
import Badges from './Badges.vue'

storiesOf('Examples', module)
    .add('Badges', () => ({
        render: h => h(Badges),
    }))
    .add('Forms', () => ({
        render: h => h(Forms),
    }))

