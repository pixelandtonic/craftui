/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

storiesOf('Components|Checkbox', module)
    .add('Checked', () => ({
        template: '<checkbox label="Label" :value="true" label="Item" instructions="Some instructions."></checkbox>',
    }))
    .add('Unchecked', () => ({
        template: '<checkbox label="Label" :value="false" label="Item" instructions="Some instructions."></checkbox>',
    }))
    .add('Error', () => ({
        template: '<checkbox label="Label" :value="false" label="Item" instructions="Some instructions." :errors="[\'Error message.\']"></checkbox>',
    }));

storiesOf('Components|CheckboxSet', module)
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

storiesOf('Components|Lightswitch', module)
    .add('Checked', () => ({
        template: '<lightswitch label="Label" instructions="Some instructions." :checked="true"></lightswitch>',
    }))
    .add('Unchecked', () => ({
        template: '<lightswitch label="Label" instructions="Some instructions." :checked="false"></lightswitch>',
    }))
    .add('Error', () => ({
        template: '<lightswitch label="Label" instructions="Some instructions." :checked="false" :errors="[\'Error message.\']"></lightswitch>',
    }));

storiesOf('Components|Dropdown', module)
    .add('Default', () => ({
        template: '<dropdown label="Label" instructions="Some instructions." :options="[{label:\'One\', value:1}, {label:\'Two\', value:2}, {label:\'Three\', value:3}]"></dropdown>',
    }))
    .add('Error', () => ({
        template: '<dropdown label="Label" instructions="Some instructions." :options="[{label:\'One\', value:1}, {label:\'Two\', value:2}, {label:\'Three\', value:3}]" :errors="[\'Error message.\']"></dropdown>',
    }));


storiesOf('Components|TextareaField', module)
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

storiesOf('Components|Text', module)
    .add('Default', () => ({
        template: '<text label="Label" instructions="Some instructions."></text>',
    }))
    .add('Error', () => ({
        template: '<text label="Label" instructions="Some instructions." :errors="[\'Error message.\']" value="some value"></text>',
    }))
    .add('Mask', () => ({
        template: '<text id="max" label="Label" instructions="Some instructions." placeholder="XXXX-XXXX-XXXX-XXXX-XXXX-XXXX" v-model="value" mask="XXXX-XXXX-XXXX-XXXX-XXXX-XXXX"></text>',
        data() {
            return {
                value: ''
            }
        }
    }))
    .add('Max', () => ({
        template: '<text id="max" label="Label" instructions="Some instructions." placeholder="Max 130 characters." v-model="value" :max="130"></text>',
        data() {
            return {
                value: ''
            }
        }
    }))
    .add('Password', () => ({
        template: '<text type="password" label="Label" instructions="Some instructions."></text>',
    }))
    .add('URL', () => ({
        template: '<text type="url" label="Label" instructions="Some instructions."></text>',
    }))
    .add('Number', () => ({
        template: '<text type="number" label="Label" instructions="Some instructions."></text>',
    }));

