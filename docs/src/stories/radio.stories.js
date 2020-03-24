import {Radio} from '../../../dist/craftui.esm'
import RadioNotesMD from '../notes/Radio.md'
import {withKnobs, boolean} from '@storybook/addon-knobs'

export default {
    title: 'Components/Radio',
    decorators: [withKnobs],
    parameters: {notes: {markdown: RadioNotesMD}},
}

export const Default = () => ({
    components: {Radio},
    template: `
        <div>
            <radio label="Yes" v-model="answer" value="yes"
                   :checked="radio1Checked"/>
            <radio label="No" v-model="answer" value="no"
                   :disabled="radio2Disabled"/>
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
})
