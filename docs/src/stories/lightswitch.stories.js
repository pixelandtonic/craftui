/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import LightswitchNotesMD from '../notes/Lightswitch.md'

storiesOf('Components|Lightswitch', module)
    .add('Checked', () => ({
        template: '<lightswitch label="Label" instructions="Some instructions." :checked="true" />',
    }), { notes: { markdown: LightswitchNotesMD } })
    .add('Unchecked', () => ({
        template: '<lightswitch label="Label" instructions="Some instructions." :checked="false" />',
    }), { notes: { markdown: LightswitchNotesMD } })
    .add('Error', () => ({
        template: '<lightswitch label="Label" instructions="Some instructions." :checked="false" :errors="[\'Error message.\']" />',
    }), { notes: { markdown: LightswitchNotesMD } })