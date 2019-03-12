/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

storiesOf('Components|Fields/Checkbox', module)
    .add('Checked', () => ({
        template: '<checkbox-field label="Label" :value="true" label="Item" instructions="Some instructions."></checkbox-field>',
    }))
    .add('Unchecked', () => ({
        template: '<checkbox-field label="Label" :value="false" label="Item" instructions="Some instructions."></checkbox-field>',
    }))
    .add('Error', () => ({
        template: '<checkbox-field label="Label" :value="false" label="Item" instructions="Some instructions." :errors="[\'Error message.\']"></checkbox-field>',
    }));

storiesOf('Components|Fields/Checkbox Set', module)
    .add('Default', () => ({
        template:
            '<div>' +
                '<checkbox-set label="Label" v-model="value" instructions="Some instructions." :options="options"></checkbox-set>' +
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
                '<checkbox-set label="Label" v-model="value" instructions="Some instructions." :options="options" :errors="[\'Error message.\']"></checkbox-set>' +
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
        template: '<lightswitch-field label="Label" instructions="Some instructions." :checked="true"></lightswitch-field>',
    }))
    .add('Unchecked', () => ({
        template: '<lightswitch-field label="Label" instructions="Some instructions." :checked="false"></lightswitch-field>',
    }))
    .add('Error', () => ({
        template: '<lightswitch-field label="Label" instructions="Some instructions." :checked="false" :errors="[\'Error message.\']"></lightswitch-field>',
    }));

storiesOf('Components|Fields/Select', module)
    .add('Default', () => ({
        template: '<select-field label="Label" instructions="Some instructions." :options="[{label:\'One\', value:1}, {label:\'Two\', value:2}, {label:\'Three\', value:3}]"></select-field>',
    }))
    .add('Error', () => ({
        template: '<select-field label="Label" instructions="Some instructions." :options="[{label:\'One\', value:1}, {label:\'Two\', value:2}, {label:\'Three\', value:3}]" :errors="[\'Error message.\']"></select-field>',
    }));


storiesOf('Components|Fields/Textarea', module)
    .add('Default', () => ({
        template: '<textarea-field id="textarea-default" label="Label" instructions="Some instructions."></textarea-field>',
    }))
    .add('Error', () => ({
        template: '<textarea-field id="textarea-default" label="Label" instructions="Some instructions." :errors="[\'Error message.\']"></textarea-field>',
    }))
    .add('Max', () => ({
        template: '<textarea-field id="max" label="Label" instructions="Some instructions." placeholder="Max 130 characters." v-model="value" :max="130"></textarea-field>',
        data() {
            return {
                value: ''
            }
        }
    }));

storiesOf('Components|Fields/Text', module)
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
    }));

