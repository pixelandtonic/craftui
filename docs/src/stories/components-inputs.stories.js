/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

storiesOf('Components|Inputs/Lightswitch', module)
    .add('Checked', () => ({
        template: '<lightswitch-input :checked="true"></lightswitch-input>',
    }))
    .add('Unchecked', () => ({
        template: '<lightswitch-input :checked="false"></lightswitch-input>',
    }));

storiesOf('Components|Inputs/Select', module)
    .add('Default', () => ({
        template: '<select-input :options="[{label:\'One\', value:1}, {label:\'Two\', value:2}, {label:\'Three\', value:3}]"></select-input>',
    }));


storiesOf('Components|Inputs/Textarea', module)
    .add('Default', () => ({
        template: '<textarea-input id="textarea-default" label="Textarea"></textarea-input>',
    }));

storiesOf('Components|Inputs/Text', module)
    .add('Default', () => ({
        template: '<text-input></text-input>',
    }))
    .add('Mask', () => ({
        template: '<text-input placeholder="XXXX-XXXX-XXXX-XXXX-XXXX-XXXX" mask="XXXX-XXXX-XXXX-XXXX-XXXX-XXXX"></text-input>',
    }))
    .add('Password', () => ({
        template: '<text-input type="password"></text-input>',
    }))
    .add('URL', () => ({
        template: '<text-input type="url"></text-input>',
    }));
