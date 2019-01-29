/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

storiesOf('Checkbox Field', module)
    .add('Checked', () => ({
        template: '<checkbox-field :value="true"></checkbox-field>',
    }))
    .add('Unchecked', () => ({
        template: '<checkbox-field :value="false"></checkbox-field>',
    }));

const icons = ['coffee', 'times', 'th', 'bars', 'plus', 'key', 'plug', 'image', 'user', 'pencil-alt', 'exclamation-triangle', 'bug', 'shopping-cart', 'dollar-sign', 'handshake', 'link', 'check', 'book', 'search', 'copy']
const iconStory = storiesOf('Icon', module)

for (let i = 0; i < icons.length; i++) {
    const icon = icons[i]

    iconStory.add(icon, () => ({
        template: '<icon icon="' + icon + '" size="2xl"></icon>'
    }))
}

storiesOf('Lightswitch Field', module)
    .add('Checked', () => ({
        template: '<lightswitch-field :checked="true"></lightswitch-field>',
    }))
    .add('Unchecked', () => ({
        template: '<lightswitch-field :checked="false"></lightswitch-field>',
    }));

storiesOf('Password Field', module)
    .add('Default', () => ({
        template: '<password-field></password-field>',
    }));

storiesOf('Select Field', module)
    .add('Default', () => ({
        template: '<select-field :options="[{label:\'One\', value:1}, {label:\'Two\', value:2}, {label:\'Three\', value:3}]"></select-field>',
    }));


storiesOf('Textarea Field', module)
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

storiesOf('Text Field', module)
    .add('Default', () => ({
        template: '<text-field></text-field>',
    }));

storiesOf('URL Field', module)
    .add('Default', () => ({
        template: '<url-field></url-field>',
    }));
