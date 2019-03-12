/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import CheckboxNotesMD from '../notes/Checkbox.md'

storiesOf('Components|Checkbox', module)
    .add('Checked', () => ({
        template: '<checkbox label="Label" :value="true" instructions="Some instructions." />',
    }), { notes: { markdown: CheckboxNotesMD } })
    .add('Unchecked', () => ({
        template: '<checkbox label="Label" :value="false" instructions="Some instructions." />',
    }), { notes: { markdown: CheckboxNotesMD } })
    .add('Error', () => ({
        template: '<checkbox label="Label" :value="false" instructions="Some instructions." :errors="[\'Error message.\']" />',
    }), { notes: { markdown: CheckboxNotesMD } })