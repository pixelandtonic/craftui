/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import TextboxNotesMD from '../notes/Textbox.md'
import {array, text} from '@storybook/addon-knobs';

storiesOf('Components|Textbox', module)
    .add('Default', () => ({
        template: `<textbox 
                        :errors="errors"
                        :instructions="instructions"
                        :label="label"
                        :value="value"
                   />`,
        props: {
            errors: {
                type: Array,
                default: array('errors', [])
            },
            instructions: {
                type: String,
                default: text('instructions', 'Some instructions.')
            },
            label: {
                type: String,
                default: text('label', 'Label')
            },
            value: {
                type: String,
                default: text('value', 'Some value')
            },
        },
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
        template: '<textbox type="number" label="Label" instructions="Some instructions." :value="0"></textbox>',
    }), { notes: { markdown: TextboxNotesMD } })
    .add('Textarea', () => ({
        template: '<textbox type="textarea" label="Label" :value="value" instructions="Some instructions."></textbox>',
        props: {
            value: {
                type: String,
                default: text('value', 'Some value')
            },
        }
    }), { notes: { markdown: TextboxNotesMD } })