/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

storiesOf('Components|Spinners', module)
    .add('base', () => ({
        template: '<spinner></spinner>',
    }))
    .add('lg', () => ({
        template: '<spinner class="lg"></spinner>',
    }))
