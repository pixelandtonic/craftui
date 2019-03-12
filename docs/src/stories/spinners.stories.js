/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import SpinnerNotesMD from '../notes/Spinner.md'

storiesOf('Components|Spinners', module)
    .add('base', () => ({
        template: '<spinner></spinner>',
    }), { notes: { markdown: SpinnerNotesMD } })
    .add('lg', () => ({
        template: '<spinner class="lg"></spinner>',
    }), { notes: { markdown: SpinnerNotesMD } })
