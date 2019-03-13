/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import FieldNotesMD from '../notes/Field.md'

storiesOf('Components|Field', module)
    .add('Default', () => ({
        template:
            '<field label="Label" instructions="Some instructions.">Use the default slot to add an input or an element.</field>',
    }), { notes: { markdown: FieldNotesMD } })
