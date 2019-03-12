/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import CheckboxSetNotesMD from '../notes/CheckboxSet.md'

storiesOf('Components|CheckboxSet', module)
    .add('Default', () => ({
        template:
            '<div>' +
            '<checkbox-set label="Label" v-model="value" instructions="Some instructions." :options="options" />' +
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
    }), { notes: { markdown: CheckboxSetNotesMD } })
    .add('Error', () => ({
        template:
            '<div>' +
            '<checkbox-set label="Label" v-model="value" instructions="Some instructions." :options="options" :errors="[\'Error message.\']" />' +
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
    }), { notes: { markdown: CheckboxSetNotesMD } })