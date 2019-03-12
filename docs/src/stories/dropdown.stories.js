/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

storiesOf('Components|Dropdown', module)
    .add('Default', () => ({
        template: '<dropdown label="Label" instructions="Some instructions." :options="[{label:\'One\', value:1}, {label:\'Two\', value:2}, {label:\'Three\', value:3}]"></dropdown>',
    }))
    .add('Error', () => ({
        template: '<dropdown label="Label" instructions="Some instructions." :options="[{label:\'One\', value:1}, {label:\'Two\', value:2}, {label:\'Three\', value:3}]" :errors="[\'Error message.\']"></dropdown>',
    }));