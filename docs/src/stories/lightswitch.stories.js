import Lightswitch from '../../../src/components/Lightswitch'
import {withKnobs, boolean} from '@storybook/addon-knobs'
import {withA11y} from '@storybook/addon-a11y'

export default {
    title: 'Components/Lightswitch',
    component: Lightswitch,
    decorators: [withKnobs, withA11y],
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
