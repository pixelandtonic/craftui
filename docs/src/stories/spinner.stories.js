/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import SpinnerNotesMD from '../notes/Spinner.md'
import {select} from '@storybook/addon-knobs';

storiesOf('Components|Spinner', module)
    .add('Default', () => ({
        template: `<spinner :size="size"></spinner>`,
        props: {
            size: {
                type: String,
                default: select('size', ['sm', 'base', 'lg'], 'base')
            },
        },
    }), { notes: { markdown: SpinnerNotesMD } })
