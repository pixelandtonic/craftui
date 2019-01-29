/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

storiesOf('Components|Fields/Checkbox', module)
    .add('Checked', () => ({
        template: '<checkbox-field :value="true"></checkbox-field>',
    }))
    .add('Unchecked', () => ({
        template: '<checkbox-field :value="false"></checkbox-field>',
    }));

storiesOf('Components|Fields/Checkbox Set', module)
    .add('Default', () => ({
        template:
            '<div>' +
                '<checkbox-set label="Label" v-model="value" instructions="Instructions" :options="options"></checkbox-set>' +
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
        template: '<lightswitch-field :checked="true"></lightswitch-field>',
    }))
    .add('Unchecked', () => ({
        template: '<lightswitch-field :checked="false"></lightswitch-field>',
    }));

storiesOf('Components|Fields/Password', module)
    .add('Default', () => ({
        template: '<password-field></password-field>',
    }));

storiesOf('Components|Fields/Select', module)
    .add('Default', () => ({
        template: '<select-field :options="[{label:\'One\', value:1}, {label:\'Two\', value:2}, {label:\'Three\', value:3}]"></select-field>',
    }));


storiesOf('Components|Fields/Textarea', module)
    .add('Default', () => ({
        template: '<textarea-field id="textarea-default" label="Textarea"></textarea-field>',
    }))
    .add('with Max', () => ({
        template: '<textarea-field id="max" label="Textarea" placeholder="Max 130 characters." v-model="value" :max="130"></textarea-field>',
        data() {
            return {
                value: ''
            }
        }
    }));

storiesOf('Components|Fields/Text', module)
    .add('Default', () => ({
        template: '<text-field></text-field>',
    }));

storiesOf('Components|Fields/URL', module)
    .add('Default', () => ({
        template: '<url-field></url-field>',
    }));
