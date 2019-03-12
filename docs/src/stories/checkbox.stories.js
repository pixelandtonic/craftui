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