/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import TextboxNotesMD from '../notes/Textbox.md'

storiesOf('Components|Textbox', module)
    .add('Default', () => ({
        template: '<textbox label="Label" instructions="Some instructions."></textbox>',
    }), { notes: { markdown: TextboxNotesMD } })
    .add('Error', () => ({
        template: '<textbox label="Label" instructions="Some instructions." :errors="[\'Error message.\']" value="some value"></textbox>',
    }), { notes: { markdown: TextboxNotesMD } })
    .add('Mask', () => ({
        template: '<textbox id="max" label="Label" instructions="Some instructions." placeholder="XXXX-XXXX-XXXX-XXXX-XXXX-XXXX" v-model="value" mask="XXXX-XXXX-XXXX-XXXX-XXXX-XXXX"></textbox>',
        data() {
            return {
                value: ''
            }
        }
    }), { notes: { markdown: TextboxNotesMD } })
    .add('Max', () => ({
        template: '<textbox id="max" label="Label" instructions="Some instructions." placeholder="Max 130 characters." v-model="value" :max="130"></textbox>',
        data() {
            return {
                value: ''
            }
        }
    }), { notes: { markdown: TextboxNotesMD } })
    .add('Password', () => ({
        template: '<textbox type="password" label="Label" instructions="Some instructions."></textbox>',
    }), { notes: { markdown: TextboxNotesMD } })
    .add('URL', () => ({
        template: '<textbox type="url" label="Label" instructions="Some instructions."></textbox>',
    }), { notes: { markdown: TextboxNotesMD } })
    .add('Number', () => ({
        template: '<textbox type="number" label="Label" instructions="Some instructions."></textbox>',
    }), { notes: { markdown: TextboxNotesMD } })
    .add('Textarea', () => ({
        template: '<textbox type="textarea" label="Label" instructions="Some instructions."></textbox>',
    }), { notes: { markdown: TextboxNotesMD } });