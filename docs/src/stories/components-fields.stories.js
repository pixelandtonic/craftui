/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

storiesOf('Components|Fields/Checkbox', module)
    .add('Checked', () => ({
        template: '<c-checkbox-field label="Label" :value="true" label="Item" instructions="Some instructions."></c-checkbox-field>',
    }))
    .add('Unchecked', () => ({
        template: '<c-checkbox-field label="Label" :value="false" label="Item" instructions="Some instructions."></c-checkbox-field>',
    }))
    .add('Error', () => ({
        template: '<c-checkbox-field label="Label" :value="false" label="Item" instructions="Some instructions." :errors="[\'Error message.\']"></c-checkbox-field>',
    }));

storiesOf('Components|Fields/Checkbox Set', module)
    .add('Default', () => ({
        template:
            '<div>' +
                '<c-checkbox-set label="Label" v-model="value" instructions="Some instructions." :options="options"></c-checkbox-set>' +
                '<pre>{{value}}</pre>' +
            '</div>',
        data() {
            return {
                value: [],
                options: [
                    {
                        label: "Test",
                        value: 'test'
                    },
                    {
                        label: "Test 2",
                        value: 'test2'
                    }
                ]
            }
        }
    }))
    .add('Error', () => ({
        template:
            '<div>' +
                '<c-checkbox-set label="Label" v-model="value" instructions="Some instructions." :options="options" :errors="[\'Error message.\']"></c-checkbox-set>' +
                '<pre>{{value}}</pre>' +
            '</div>',
        data() {
            return {
                value: [],
                options: [
                    {
                        label: "Test",
                        value: 'test'
                    },
                    {
                        label: "Test 2",
                        value: 'test2'
                    }
                ]
            }
        }
    }));

storiesOf('Components|Fields/Lightswitch', module)
    .add('Checked', () => ({
        template: '<c-lightswitch-field label="Label" instructions="Some instructions." :checked="true"></c-lightswitch-field>',
    }))
    .add('Unchecked', () => ({
        template: '<c-lightswitch-field label="Label" instructions="Some instructions." :checked="false"></c-lightswitch-field>',
    }))
    .add('Error', () => ({
        template: '<c-lightswitch-field label="Label" instructions="Some instructions." :checked="false" :errors="[\'Error message.\']"></c-lightswitch-field>',
    }));

storiesOf('Components|Fields/Select', module)
    .add('Default', () => ({
        template: '<c-select-field label="Label" instructions="Some instructions." :options="[{label:\'One\', value:1}, {label:\'Two\', value:2}, {label:\'Three\', value:3}]"></c-select-field>',
    }))
    .add('Error', () => ({
        template: '<c-select-field label="Label" instructions="Some instructions." :options="[{label:\'One\', value:1}, {label:\'Two\', value:2}, {label:\'Three\', value:3}]" :errors="[\'Error message.\']"></c-select-field>',
    }));


storiesOf('Components|Fields/Textarea', module)
    .add('Default', () => ({
        template: '<c-textarea-field id="textarea-default" label="Label" instructions="Some instructions."></c-textarea-field>',
    }))
    .add('Error', () => ({
        template: '<c-textarea-field id="textarea-default" label="Label" instructions="Some instructions." :errors="[\'Error message.\']"></c-textarea-field>',
    }))
    .add('Max', () => ({
        template: '<c-textarea-field id="max" label="Label" instructions="Some instructions." placeholder="Max 130 characters." v-model="value" :max="130"></c-textarea-field>',
        data() {
            return {
                value: ''
            }
        }
    }));

storiesOf('Components|Fields/Text', module)
    .add('Default', () => ({
        template: '<c-text-field label="Label" instructions="Some instructions."></c-text-field>',
    }))
    .add('Error', () => ({
        template: '<c-text-field label="Label" instructions="Some instructions." :errors="[\'Error message.\']" value="some value"></c-text-field>',
    }))
    .add('Mask', () => ({
        template: '<c-text-field id="max" label="Label" instructions="Some instructions." placeholder="XXXX-XXXX-XXXX-XXXX-XXXX-XXXX" v-model="value" mask="XXXX-XXXX-XXXX-XXXX-XXXX-XXXX"></c-text-field>',
        data() {
            return {
                value: ''
            }
        }
    }))
    .add('Max', () => ({
        template: '<c-text-field id="max" label="Label" instructions="Some instructions." placeholder="Max 130 characters." v-model="value" :max="130"></c-text-field>',
        data() {
            return {
                value: ''
            }
        }
    }))
    .add('Password', () => ({
        template: '<c-text-field type="password" label="Label" instructions="Some instructions."></c-text-field>',
    }))
    .add('URL', () => ({
        template: '<c-text-field type="url" label="Label" instructions="Some instructions."></c-text-field>',
    }))
    .add('Number', () => ({
        template: '<c-text-field type="number" label="Label" instructions="Some instructions."></c-text-field>',
    }));

