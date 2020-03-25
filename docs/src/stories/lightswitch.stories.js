import Lightswitch from '../../../src/components/Lightswitch'
import {withKnobs, boolean} from '@storybook/addon-knobs'

export default {
    title: 'Components/Lightswitch',
    component: Lightswitch,
    decorators: [withKnobs],
}

export const Default = () => ({
    components: {Lightswitch},
    template: `
        <lightswitch
                :checked="checked"
                :disabled="disabled"
                :instructions="instructions"
                :label="label"
        />`,
    props: {
        checked: {
            type: Boolean,
            default: boolean('checked', false)
        },
        disabled: {
            type: Boolean,
            default: boolean('disabled', false)
        },
    },
})
