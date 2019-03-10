/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import {action} from '@storybook/addon-actions'
import { withViewport } from '@storybook/addon-viewport'
import BtnNotesMD from '../notes/Btn.md'

storiesOf('Components|Buttons', module)
    .add('Regular', () => ({
        template:
            '<div>' +
            '<btn @click="action">Default</btn> ' +
            '<btn kind="primary" @click="action">Primary</btn> ' +
            '<btn kind="warning" @click="action">Warning</btn> ' +
            '<btn kind="danger" @click="action">Danger</btn> ' +
            '<btn kind="info" @click="action">Info</btn>' +
            '</div>',
        methods: { action: action('clicked') },
    }), { notes: { markdown: BtnNotesMD } })
    .add('Outline', () => ({
        template:
            '<div>' +
            '<btn outline @click="action">Default</btn> ' +
            '<btn kind="primary" outline @click="action">Primary</btn> ' +
            '<btn kind="warning" outline @click="action">Warning</btn> ' +
            '<btn kind="danger" outline @click="action">Danger</btn> ' +
            '<btn kind="info" outline @click="action">Info</btn>' +
            '</div>',
        methods: { action: action('clicked') }
    }), { notes: { markdown: BtnNotesMD } })
    .add('Icon', () => ({
        template:
            '<div>' +
            '<div>' +
            '<btn icon="plus" @click="action">Default</btn> ' +
            '<btn kind="primary" icon="plus" @click="action">Primary</btn> ' +
            '<btn kind="warning" icon="plus" @click="action">Warning</btn> ' +
            '<btn kind="danger" icon="plus" @click="action">Danger</btn> ' +
            '<btn kind="info" icon="plus" @click="action">Info</btn>' +
            '</div>' +
            '<div style="margin-top: 20px;">' +
            '<btn icon="plus" outline @click="action">Default</btn> ' +
            '<btn kind="primary" icon="plus" outline @click="action">Primary</btn> ' +
            '<btn kind="warning" icon="plus" outline @click="action">Warning</btn> ' +
            '<btn kind="danger" icon="plus" outline @click="action">Danger</btn> ' +
            '<btn kind="info" icon="plus" outline @click="action">Info</btn>' +
            '</div>' +
            '</div>',
        methods: { action: action('clicked') }
    }), { notes: { markdown: BtnNotesMD } })
    .addDecorator(withViewport('iphonex'))
    .add('Block', () => ({
        template:
            '<div>' +
            '<div>' +
            '<btn block @click="action">Default</btn> ' +
            '<btn kind="primary" block @click="action">Primary</btn> ' +
            '<btn kind="warning" block @click="action">Warning</btn> ' +
            '<btn kind="danger" block @click="action">Danger</btn> ' +
            '<btn kind="info" block @click="action">Info</btn>' +
            '</div>' +
            '<div style="margin-top: 20px;">' +
            '<btn icon="plus" outline block @click="action">Default</btn> ' +
            '<btn kind="primary" icon="plus" outline block @click="action">Primary</btn> ' +
            '<btn kind="warning" icon="plus" outline block @click="action">Warning</btn> ' +
            '<btn kind="danger" icon="plus" outline block @click="action">Danger</btn> ' +
            '<btn kind="info" icon="plus" outline block @click="action">Info</btn>' +
            '</div>' +
            '</div>',
        methods: { action: action('clicked') }
    }), { notes: { markdown: BtnNotesMD } })

storiesOf('Components|Buttons/States', module)
    .add('Disabled', () => ({
        template:
            '<div>' +
                '<div>' +
                    '<btn :disabled="true" @click="action">Default</btn> ' +
                    '<btn kind="primary" :disabled="true" @click="action">Primary</btn> ' +
                    '<btn kind="warning" :disabled="true" @click="action">Warning</btn> ' +
                    '<btn kind="danger" :disabled="true" @click="action">Danger</btn> ' +
                    '<btn kind="info" :disabled="true" @click="action">Info</btn>' +
                '</div>' +
                '<div style="margin-top: 20px;">' +
                    '<btn :disabled="true" outline @click="action">Default</btn> ' +
                    '<btn kind="primary" :disabled="true" outline @click="action">Primary</btn> ' +
                    '<btn kind="warning" :disabled="true" outline @click="action">Warning</btn> ' +
                    '<btn kind="danger" :disabled="true" outline @click="action">Danger</btn> ' +
                    '<btn kind="info" :disabled="true" outline @click="action">Info</btn>' +
                '</div>' +
                '<div style="margin-top: 20px;">' +
                    '<btn icon="plus" :disabled="true" @click="action">Default</btn> ' +
                    '<btn kind="primary" icon="plus" :disabled="true" @click="action">Primary</btn> ' +
                    '<btn kind="warning" icon="plus" :disabled="true" @click="action">Warning</btn> ' +
                    '<btn kind="danger" icon="plus" :disabled="true" @click="action">Danger</btn> ' +
                    '<btn kind="info" icon="plus" :disabled="true" @click="action">Info</btn>' +
                '</div>' +
                '<div style="margin-top: 20px;">' +
                    '<btn icon="plus" :disabled="true" outline @click="action">Default</btn> ' +
                    '<btn kind="primary" icon="plus" :disabled="true" outline @click="action">Primary</btn> ' +
                    '<btn kind="warning" icon="plus" :disabled="true" outline @click="action">Warning</btn> ' +
                    '<btn kind="danger" icon="plus" :disabled="true" outline @click="action">Danger</btn> ' +
                    '<btn kind="info" icon="plus" :disabled="true" outline @click="action">Info</btn>' +
                '</div>' +
            '</div>',
        methods: { action: action('clicked') }
    }), { notes: { markdown: BtnNotesMD } })
    .add('Loading', () => ({
        template:
            '<div>' +
                '<div>' +
                    '<btn :loading="true" @click="action">Default</btn> ' +
                    '<btn kind="primary" :loading="true" @click="action">Primary</btn> ' +
                    '<btn kind="warning" :loading="true" @click="action">Warning</btn> ' +
                    '<btn kind="danger" :loading="true" @click="action">Danger</btn> ' +
                    '<btn kind="info" :loading="true" @click="action">Info</btn>' +
                '</div>' +
                '<div style="margin-top: 20px;">' +
                    '<btn :loading="true" outline @click="action">Default</btn> ' +
                    '<btn kind="primary" :loading="true" outline @click="action">Primary</btn> ' +
                    '<btn kind="warning" :loading="true" outline @click="action">Warning</btn> ' +
                    '<btn kind="danger" :loading="true" outline @click="action">Danger</btn> ' +
                    '<btn kind="info" :loading="true" outline @click="action">Info</btn>' +
                '</div>' +
            '</div>',
        methods: { action: action('clicked') }
    }), { notes: { markdown: BtnNotesMD } })

storiesOf('Components|Buttons/Size', module)
    .add('Small', () => ({
        template:
            '<div>' +
            '<div>' +
            '<btn small @click="action">Default</btn> ' +
            '<btn kind="primary" small @click="action">Primary</btn> ' +
            '<btn kind="warning" small @click="action">Warning</btn> ' +
            '<btn kind="danger" small @click="action">Danger</btn> ' +
            '<btn kind="info" small @click="action">Info</btn>' +
            '</div>' +
            '<div style="margin-top: 20px;">' +
            '<btn icon="plus" outline small @click="action">Default</btn> ' +
            '<btn kind="primary" icon="plus" outline small @click="action">Primary</btn> ' +
            '<btn kind="warning" icon="plus" outline small @click="action">Warning</btn> ' +
            '<btn kind="danger" icon="plus" outline small @click="action">Danger</btn> ' +
            '<btn kind="info" icon="plus" outline small @click="action">Info</btn>' +
            '</div>' +
            '</div>',
        methods: { action: action('clicked') }
    }), { notes: { markdown: BtnNotesMD } })
    .add('Default', () => ({
        template:
            '<div>' +
            '<div>' +
            '<btn @click="action">Default</btn> ' +
            '<btn kind="primary" @click="action">Primary</btn> ' +
            '<btn kind="warning" @click="action">Warning</btn> ' +
            '<btn kind="danger" @click="action">Danger</btn> ' +
            '<btn kind="info" @click="action">Info</btn>' +
            '</div>' +
            '<div style="margin-top: 20px;">' +
            '<btn icon="plus" outline @click="action">Default</btn> ' +
            '<btn kind="primary" icon="plus" outline @click="action">Primary</btn> ' +
            '<btn kind="warning" icon="plus" outline @click="action">Warning</btn> ' +
            '<btn kind="danger" icon="plus" outline @click="action">Danger</btn> ' +
            '<btn kind="info" icon="plus" outline @click="action">Info</btn>' +
            '</div>' +
            '</div>',
        methods: { action: action('clicked') }
    }), { notes: { markdown: BtnNotesMD } })
    .add('Large', () => ({
        template:
            '<div>' +
                '<div>' +
                    '<btn large @click="action">Default</btn> ' +
                    '<btn kind="primary" large @click="action">Primary</btn> ' +
                    '<btn kind="warning" large @click="action">Warning</btn> ' +
                    '<btn kind="danger" large @click="action">Danger</btn> ' +
                    '<btn kind="info" large @click="action">Info</btn>' +
                '</div>' +
                '<div style="margin-top: 20px;">' +
                    '<btn icon="plus" outline large @click="action">Default</btn> ' +
                    '<btn kind="primary" icon="plus" outline large @click="action">Primary</btn> ' +
                    '<btn kind="warning" icon="plus" outline large @click="action">Warning</btn> ' +
                    '<btn kind="danger" icon="plus" outline large @click="action">Danger</btn> ' +
                    '<btn kind="info" icon="plus" outline large @click="action">Info</btn>' +
                '</div>' +
            '</div>',
        methods: { action: action('clicked') }
    }), { notes: { markdown: BtnNotesMD } })
