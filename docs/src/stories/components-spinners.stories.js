/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

storiesOf('Components|Spinners', module)
    .add('Default', () => ({
        template: '<loading-indicator></loading-indicator>',
    }))
