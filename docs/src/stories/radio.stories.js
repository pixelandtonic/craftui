/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import RadioNotesMD from '../notes/Radio.md'

storiesOf('Components|Radio', module)
    .add('Default', () => ({
        template:
            '<div>' +
            '<radio label="Yes" v-model="answer" value="yes" />' +
            '<radio label="No" v-model="answer" value="no" />' +
            '</div>',
        data() {
            return {
                answer: 'yes'
            }
        }
    }), { notes: { markdown: RadioNotesMD } })