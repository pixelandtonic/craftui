/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

storiesOf('Components|Textbox', module)
    .add('Default', () => ({
        template: '<textbox label="Label" instructions="Some instructions."></textbox>',
    }))
    .add('Error', () => ({
        template: '<textbox label="Label" instructions="Some instructions." :errors="[\'Error message.\']" value="some value"></textbox>',
    }))
    .add('Mask', () => ({
        template: '<textbox id="max" label="Label" instructions="Some instructions." placeholder="XXXX-XXXX-XXXX-XXXX-XXXX-XXXX" v-model="value" mask="XXXX-XXXX-XXXX-XXXX-XXXX-XXXX"></textbox>',
        data() {
            return {
                value: ''
            }
        }
    }))
    .add('Max', () => ({
        template: '<textbox id="max" label="Label" instructions="Some instructions." placeholder="Max 130 characters." v-model="value" :max="130"></textbox>',
        data() {
            return {
                value: ''
            }
        }
    }))
    .add('Password', () => ({
        template: '<textbox type="password" label="Label" instructions="Some instructions."></textbox>',
    }))
    .add('URL', () => ({
        template: '<textbox type="url" label="Label" instructions="Some instructions."></textbox>',
    }))
    .add('Number', () => ({
        template: '<textbox type="number" label="Label" instructions="Some instructions."></textbox>',
    }))
    .add('Textarea', () => ({
        template: '<textbox type="textarea" label="Label" instructions="Some instructions."></textbox>',
    }));