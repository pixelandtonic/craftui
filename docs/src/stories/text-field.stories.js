/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

storiesOf('Components|TextField', module)
    .add('Default', () => ({
        template: '<text-field label="Label" instructions="Some instructions."></text-field>',
    }))
    .add('Error', () => ({
        template: '<text-field label="Label" instructions="Some instructions." :errors="[\'Error message.\']" value="some value"></text-field>',
    }))
    .add('Mask', () => ({
        template: '<text-field id="max" label="Label" instructions="Some instructions." placeholder="XXXX-XXXX-XXXX-XXXX-XXXX-XXXX" v-model="value" mask="XXXX-XXXX-XXXX-XXXX-XXXX-XXXX"></text-field>',
        data() {
            return {
                value: ''
            }
        }
    }))
    .add('Max', () => ({
        template: '<text-field id="max" label="Label" instructions="Some instructions." placeholder="Max 130 characters." v-model="value" :max="130"></text-field>',
        data() {
            return {
                value: ''
            }
        }
    }))
    .add('Password', () => ({
        template: '<text-field type="password" label="Label" instructions="Some instructions."></text-field>',
    }))
    .add('URL', () => ({
        template: '<text-field type="url" label="Label" instructions="Some instructions."></text-field>',
    }))
    .add('Number', () => ({
        template: '<text-field type="number" label="Label" instructions="Some instructions."></text-field>',
    }))
    .add('Textarea', () => ({
        template: '<text-field type="textarea" label="Label" instructions="Some instructions."></text-field>',
    }));