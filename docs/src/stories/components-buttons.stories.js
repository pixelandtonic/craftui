/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import {action} from '@storybook/addon-actions'
import { withViewport } from '@storybook/addon-viewport'
import CBtnNotesMD from '../notes/CBtn.md'

storiesOf('Components|Buttons', module)
    .add('Regular', () => ({
        template:
            '<div>' +
            '<c-btn @click="action">Default</c-btn> ' +
            '<c-btn kind="primary" @click="action">Primary</c-btn> ' +
            '<c-btn kind="danger" @click="action">Danger</c-btn> ' +
            '</div>',
        methods: { action: action('clicked') },
    }), { notes: { markdown: CBtnNotesMD } })
    .add('Outline', () => ({
        template:
            '<div>' +
            '<c-btn outline @click="action">Default</c-btn> ' +
            '<c-btn kind="primary" outline @click="action">Primary</c-btn> ' +
            '<c-btn kind="danger" outline @click="action">Danger</c-btn> ' +
            '</div>',
        methods: { action: action('clicked') }
    }), { notes: { markdown: CBtnNotesMD } })
    .add('Icon', () => ({
        template:
            '<div>' +
            '<div>' +
            '<c-btn icon="plus" @click="action">Default</c-btn> ' +
            '<c-btn kind="primary" icon="plus" @click="action">Primary</c-btn> ' +
            '<c-btn kind="danger" icon="plus" @click="action">Danger</c-btn> ' +
            '</div>' +
            '<div style="margin-top: 20px;">' +
            '<c-btn icon="plus" outline @click="action">Default</c-btn> ' +
            '<c-btn kind="primary" icon="plus" outline @click="action">Primary</c-btn> ' +
            '<c-btn kind="danger" icon="plus" outline @click="action">Danger</c-btn> ' +
            '</div>' +
            '</div>',
        methods: { action: action('clicked') }
    }), { notes: { markdown: CBtnNotesMD } })
    .addDecorator(withViewport('iphonex'))
    .add('Block', () => ({
        template:
            '<div>' +
            '<div>' +
            '<c-btn block @click="action">Default</c-btn> ' +
            '<c-btn kind="primary" block @click="action">Primary</c-btn> ' +
            '<c-btn kind="danger" block @click="action">Danger</c-btn> ' +
            '</div>' +
            '<div style="margin-top: 20px;">' +
            '<c-btn icon="plus" outline block @click="action">Default</c-btn> ' +
            '<c-btn kind="primary" icon="plus" outline block @click="action">Primary</c-btn> ' +
            '<c-btn kind="danger" icon="plus" outline block @click="action">Danger</c-btn> ' +
            '</div>' +
            '</div>',
        methods: { action: action('clicked') }
    }), { notes: { markdown: CBtnNotesMD } })

storiesOf('Components|Buttons/States', module)
    .add('Disabled', () => ({
        template:
            '<div>' +
                '<div>' +
                    '<c-btn :disabled="true" @click="action">Default</c-btn> ' +
                    '<c-btn kind="primary" :disabled="true" @click="action">Primary</c-btn> ' +
                    '<c-btn kind="danger" :disabled="true" @click="action">Danger</c-btn> ' +
                '</div>' +
                '<div style="margin-top: 20px;">' +
                    '<c-btn :disabled="true" outline @click="action">Default</c-btn> ' +
                    '<c-btn kind="primary" :disabled="true" outline @click="action">Primary</c-btn> ' +
                    '<c-btn kind="danger" :disabled="true" outline @click="action">Danger</c-btn> ' +
                '</div>' +
                '<div style="margin-top: 20px;">' +
                    '<c-btn icon="plus" :disabled="true" @click="action">Default</c-btn> ' +
                    '<c-btn kind="primary" icon="plus" :disabled="true" @click="action">Primary</c-btn> ' +
                    '<c-btn kind="danger" icon="plus" :disabled="true" @click="action">Danger</c-btn> ' +
                '</div>' +
                '<div style="margin-top: 20px;">' +
                    '<c-btn icon="plus" :disabled="true" outline @click="action">Default</c-btn> ' +
                    '<c-btn kind="primary" icon="plus" :disabled="true" outline @click="action">Primary</c-btn> ' +
                    '<c-btn kind="danger" icon="plus" :disabled="true" outline @click="action">Danger</c-btn> ' +
                '</div>' +
            '</div>',
        methods: { action: action('clicked') }
    }), { notes: { markdown: CBtnNotesMD } })
    .add('Loading', () => ({
        template:
            '<div>' +
                '<div>' +
                    '<c-btn :loading="true" @click="action">Default</c-btn> ' +
                    '<c-btn kind="primary" :loading="true" @click="action">Primary</c-btn> ' +
                    '<c-btn kind="danger" :loading="true" @click="action">Danger</c-btn> ' +
                '</div>' +
                '<div style="margin-top: 20px;">' +
                    '<c-btn :loading="true" outline @click="action">Default</c-btn> ' +
                    '<c-btn kind="primary" :loading="true" outline @click="action">Primary</c-btn> ' +
                    '<c-btn kind="danger" :loading="true" outline @click="action">Danger</c-btn> ' +
                '</div>' +
            '</div>',
        methods: { action: action('clicked') }
    }), { notes: { markdown: CBtnNotesMD } })

storiesOf('Components|Buttons/Size', module)
    .add('Small', () => ({
        template:
            '<div>' +
            '<div>' +
            '<c-btn small @click="action">Default</c-btn> ' +
            '<c-btn kind="primary" small @click="action">Primary</c-btn> ' +
            '<c-btn kind="danger" small @click="action">Danger</c-btn> ' +
            '</div>' +
            '<div style="margin-top: 20px;">' +
            '<c-btn icon="plus" outline small @click="action">Default</c-btn> ' +
            '<c-btn kind="primary" icon="plus" outline small @click="action">Primary</c-btn> ' +
            '<c-btn kind="danger" icon="plus" outline small @click="action">Danger</c-btn> ' +
            '</div>' +
            '</div>',
        methods: { action: action('clicked') }
    }), { notes: { markdown: CBtnNotesMD } })
    .add('Default', () => ({
        template:
            '<div>' +
            '<div>' +
            '<c-btn @click="action">Default</c-btn> ' +
            '<c-btn kind="primary" @click="action">Primary</c-btn> ' +
            '<c-btn kind="danger" @click="action">Danger</c-btn> ' +
            '</div>' +
            '<div style="margin-top: 20px;">' +
            '<c-btn icon="plus" outline @click="action">Default</c-btn> ' +
            '<c-btn kind="primary" icon="plus" outline @click="action">Primary</c-btn> ' +
            '<c-btn kind="danger" icon="plus" outline @click="action">Danger</c-btn> ' +
            '</div>' +
            '</div>',
        methods: { action: action('clicked') }
    }), { notes: { markdown: CBtnNotesMD } })
    .add('Large', () => ({
        template:
            '<div>' +
                '<div>' +
                    '<c-btn large @click="action">Default</c-btn> ' +
                    '<c-btn kind="primary" large @click="action">Primary</c-btn> ' +
                    '<c-btn kind="danger" large @click="action">Danger</c-btn> ' +
                '</div>' +
                '<div style="margin-top: 20px;">' +
                    '<c-btn icon="plus" outline large @click="action">Default</c-btn> ' +
                    '<c-btn kind="primary" icon="plus" outline large @click="action">Primary</c-btn> ' +
                    '<c-btn kind="danger" icon="plus" outline large @click="action">Danger</c-btn> ' +
                '</div>' +
            '</div>',
        methods: { action: action('clicked') }
    }), { notes: { markdown: CBtnNotesMD } })
