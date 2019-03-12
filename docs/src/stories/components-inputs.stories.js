/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

storiesOf('Components|Inputs/Lightswitch', module)
    .add('Checked', () => ({
        template: '<c-lightswitch-input :checked="true"></c-lightswitch-input>',
    }))
    .add('Unchecked', () => ({
        template: '<c-lightswitch-input :checked="false"></c-lightswitch-input>',
    }));

storiesOf('Components|Inputs/Select', module)
    .add('Default', () => ({
        template: '<c-select-input :options="[{label:\'One\', value:1}, {label:\'Two\', value:2}, {label:\'Three\', value:3}]"></c-select-input>',
    }));


storiesOf('Components|Inputs/Textarea', module)
    .add('Default', () => ({
        template: '<c-textarea-input id="textarea-default" label="Textarea"></c-textarea-input>',
    }));

storiesOf('Components|Inputs/Text', module)
    .add('Default', () => ({
        template: '<c-text-input></c-text-input>',
    }))
    .add('Mask', () => ({
        template: '<c-text-input placeholder="XXXX-XXXX-XXXX-XXXX-XXXX-XXXX" mask="XXXX-XXXX-XXXX-XXXX-XXXX-XXXX"></c-text-input>',
    }))
    .add('Password', () => ({
        template: '<c-text-input type="password"></c-text-input>',
    }))
    .add('URL', () => ({
        template: '<c-text-input type="url"></c-text-input>',
    }))
    .add('Number', () => ({
        template: '<c-text-input type="number"></c-text-input>',
    }));
