/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

storiesOf('Components|Spinners', module)
    .add('base', () => ({
        template: '<loading-indicator></loading-indicator>',
    }))
    .add('lg', () => ({
        template: '<loading-indicator class="lg"></loading-indicator>',
    }))
