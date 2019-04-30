/* eslint-disable import/no-extraneous-dependencies */
import {storiesOf} from '@storybook/vue'
import RadioNotesMD from '../notes/Radio.md'
import {boolean} from '@storybook/addon-knobs';

storiesOf('Components|Radio', module)
    .add('Default', () => ({
        template: `<div>
                       <radio label="Yes" v-model="answer" value="yes" :checked="radio1Checked" />
                       <radio label="No" v-model="answer" value="no" :disabled="radio2Disabled" />
                   </div>`,
        data() {
            return {
                answer: ''
            }
        },
        props: {
            radio1Checked: {
                type: Boolean,
                default: boolean('radio-1:checked', false)
            },
            radio2Disabled: {
                type: Boolean,
                default: boolean('radio-2:disabled', false)
            },
        }
    }), {notes: {markdown: RadioNotesMD}})