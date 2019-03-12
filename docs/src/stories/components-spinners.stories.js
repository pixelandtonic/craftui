/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import CSpinnerNotesMD from '../notes/CSpinner.md'

storiesOf('Components|Spinners', module)
    .add('base', () => ({
        template: '<c-spinner></c-spinner>',
    }), { notes: { markdown: CSpinnerNotesMD } })
    .add('lg', () => ({
        template: '<c-spinner class="lg"></c-spinner>',
    }), { notes: { markdown: CSpinnerNotesMD } })
