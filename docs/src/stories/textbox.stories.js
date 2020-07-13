import Textbox from '../../../src/components/Textbox'
import {withKnobs, text, boolean} from '@storybook/addon-knobs'

export default {
    title: 'Components/Textbox',
    component: Textbox,
    decorators: [withKnobs],
}


export const Default = () => ({
    components: {Textbox},
    template: `<textbox
            :disabled="disabled"
            :invalid="invalid"
            :placeholder="placeholder"
            :value="value"
    />`,
    props: {
        disabled: {
            type: Boolean,
            default: boolean('disabled', false)
        },
        invalid: {
            type: Boolean,
            default: boolean('invalid', false)
        },
        placeholder: {
            type: String,
            default: text('placeholder', 'Placeholder')
        },
        value: {
            type: String,
            default: text('value', 'Some value')
        },
    },
})

export const Mask = () => ({
    components: {Textbox},
    template: '<textbox id="max" label="Label" instructions="Some instructions." placeholder="XXXX-XXXX-XXXX-XXXX-XXXX-XXXX" v-model="value" mask="XXXX-XXXX-XXXX-XXXX-XXXX-XXXX"></textbox>',
    data() {
        return {
            value: ''
        }
    }
})

export const Max = () => ({
    components: {Textbox},
    template: '<textbox id="max" label="Label" instructions="Some instructions." placeholder="Max 130 characters." v-model="value" :max="130"></textbox>',
    data() {
        return {
            value: ''
        }
    }
})

export const Password = () => ({
    components: {Textbox},
    template: '<textbox type="password" label="Label" instructions="Some instructions."></textbox>',
})

export const Url = () => ({
    components: {Textbox},
    template: '<textbox type="url" label="Label" instructions="Some instructions."></textbox>',
})

export const Number = () => ({
    components: {Textbox},
    template: '<textbox type="number" label="Label" instructions="Some instructions." :value="0"></textbox>',
})

export const Textarea = () => ({
    components: {Textbox},
    template: '<textbox type="textarea" label="Label" :value="value" instructions="Some instructions."></textbox>',
    props: {
        value: {
            type: String,
            default: text('value', 'Some value')
        },
    }
})
