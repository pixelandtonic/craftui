import Radio from '../../../src/components/Radio'
import {withKnobs, boolean} from '@storybook/addon-knobs'
import {withA11y} from '@storybook/addon-a11y'

export default {
    title: 'Components/Radio',
    component: Radio,
    decorators: [withKnobs, withA11y],
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
