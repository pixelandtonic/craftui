/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

storiesOf('Components|Lightswitch', module)
    .add('Checked', () => ({
        template: '<lightswitch label="Label" instructions="Some instructions." :checked="true" />',
    }))
    .add('Unchecked', () => ({
        template: '<lightswitch label="Label" instructions="Some instructions." :checked="false" />',
    }))
    .add('Error', () => ({
        template: '<lightswitch label="Label" instructions="Some instructions." :checked="false" :errors="[\'Error message.\']" />',
    }));