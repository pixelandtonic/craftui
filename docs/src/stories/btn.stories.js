/* eslint-disable import/no-extraneous-dependencies */
import {storiesOf} from '@storybook/vue'
import {action} from '@storybook/addon-actions'
import BtnNotesMD from '../notes/Btn.md'
import {text, boolean, select} from '@storybook/addon-knobs'

storiesOf('Components|Btn', module)
    .add('Default', () => ({
        template: `<btn 
                        :icon="icon" 
                        :block="block" 
                        :small="small" 
                        :large="large" 
                        :outline="outline" 
                        :kind="kind" 
                        :disabled="disabled" 
                        :loading="loading" 
                        @click="action"
                   >{{slotContent}}</btn>`,
        props: {
            kind: {
                type: String,
                default: select('kind', ['default', 'primary', 'danger'], 'default')
            },
            icon: {
                type: String,
                default: select('icon', ['', 'plus', 'glass-martini'], '')
            },
            disabled: {
                type: Boolean,
                default: boolean('disabled', false)
            },
            slotContent: {
                type: String,
                default: text('slot', 'Button')
            },
            loading: {
                type: Boolean,
                default: boolean('loading', false)
            },
            outline: {
                type: Boolean,
                default: boolean('outline', false)
            },
            small: {
                type: Boolean,
                default: boolean('small', false)
            },
            large: {
                type: Boolean,
                default: boolean('large', false)
            },
            block: {
                type: Boolean,
                default: boolean('block', false)
            },
        },
        methods: {action: action('clicked')},
    }), {notes: {markdown: BtnNotesMD}})
