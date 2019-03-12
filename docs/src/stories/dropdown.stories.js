/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import DropdownNotesMD from '../notes/Dropdown.md'

storiesOf('Components|Dropdown', module)
    .add('Default', () => ({
        template: '<dropdown label="Label" instructions="Some instructions." :options="[{label:\'One\', value:1}, {label:\'Two\', value:2}, {label:\'Three\', value:3}]"></dropdown>',
    }), { notes: { markdown: DropdownNotesMD } })
    .add('Error', () => ({
        template: '<dropdown label="Label" instructions="Some instructions." :options="[{label:\'One\', value:1}, {label:\'Two\', value:2}, {label:\'Three\', value:3}]" :errors="[\'Error message.\']"></dropdown>',
    }), { notes: { markdown: DropdownNotesMD } });