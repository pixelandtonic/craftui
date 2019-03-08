/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import {action} from '@storybook/addon-actions'
import { withViewport } from '@storybook/addon-viewport'

storiesOf('Components|Buttons', module)
    .add('Regular', () => ({
        template:
            '<div>' +
            '<btn @click="action">Default</btn> ' +
            '<btn class="primary" @click="action">Primary</btn> ' +
            '<btn class="warning" @click="action">Warning</btn> ' +
            '<btn class="danger" @click="action">Danger</btn> ' +
            '<btn class="info" @click="action">Info</btn>' +
            '</div>',
        methods: { action: action('clicked') }
    }))
    .add('Outline', () => ({
        template:
            '<div>' +
            '<btn @click="action" outline>Default</btn> ' +
            '<btn class="primary" @click="action" outline>Primary</btn> ' +
            '<btn class="warning" @click="action" outline>Warning</btn> ' +
            '<btn class="danger" @click="action" outline>Danger</btn> ' +
            '<btn class="info" @click="action" outline>Info</btn>' +
            '</div>',
        methods: { action: action('clicked') }
    }))
    .add('Icon', () => ({
        template:
            '<div>' +
            '<div>' +
            '<btn icon="plus" @click="action">Default</btn> ' +
            '<btn class="primary" icon="plus" @click="action">Primary</btn> ' +
            '<btn class="warning" icon="plus" @click="action">Warning</btn> ' +
            '<btn class="danger" icon="plus" @click="action">Danger</btn> ' +
            '<btn class="info" icon="plus" @click="action">Info</btn>' +
            '</div>' +
            '<div style="margin-top: 20px;">' +
            '<btn icon="plus" @click="action" outline>Default</btn> ' +
            '<btn class="primary" icon="plus" @click="action" outline>Primary</btn> ' +
            '<btn class="warning" icon="plus" @click="action" outline>Warning</btn> ' +
            '<btn class="danger" icon="plus" @click="action" outline>Danger</btn> ' +
            '<btn class="info" icon="plus" @click="action" outline>Info</btn>' +
            '</div>' +
            '</div>',
        methods: { action: action('clicked') }
    }))
    .addDecorator(withViewport('iphonex'))
    .add('Block', () => ({
        template:
            '<div>' +
            '<div>' +
            '<btn @click="action" block>Default</btn> ' +
            '<btn class="primary" @click="action" block>Primary</btn> ' +
            '<btn class="warning" @click="action" block>Warning</btn> ' +
            '<btn class="danger" @click="action" block>Danger</btn> ' +
            '<btn class="info" @click="action" block>Info</btn>' +
            '</div>' +
            '<div style="margin-top: 20px;">' +
            '<btn icon="plus" @click="action" outline block>Default</btn> ' +
            '<btn class="primary" icon="plus" @click="action" outline block>Primary</btn> ' +
            '<btn class="warning" icon="plus" @click="action" outline block>Warning</btn> ' +
            '<btn class="danger" icon="plus" @click="action" outline block>Danger</btn> ' +
            '<btn class="info" icon="plus" @click="action" outline block>Info</btn>' +
            '</div>' +
            '</div>',
        methods: { action: action('clicked') }
    }))

storiesOf('Components|Buttons/States', module)
    .add('Disabled', () => ({
        template:
            '<div>' +
                '<div>' +
                    '<btn :disabled="true" @click="action">Default</btn> ' +
                    '<btn class="primary" :disabled="true" @click="action">Primary</btn> ' +
                    '<btn class="warning" :disabled="true" @click="action">Warning</btn> ' +
                    '<btn class="danger" :disabled="true" @click="action">Danger</btn> ' +
                    '<btn class="info" :disabled="true" @click="action">Info</btn>' +
                '</div>' +
                '<div style="margin-top: 20px;">' +
                    '<btn :disabled="true" @click="action" outline>Default</btn> ' +
                    '<btn class="primary" :disabled="true" @click="action" outline>Primary</btn> ' +
                    '<btn class="warning" :disabled="true" @click="action" outline>Warning</btn> ' +
                    '<btn class="danger" :disabled="true" @click="action" outline>Danger</btn> ' +
                    '<btn class="info" :disabled="true" @click="action" outline>Info</btn>' +
                '</div>' +
                '<div style="margin-top: 20px;">' +
                    '<btn icon="plus" :disabled="true" @click="action">Default</btn> ' +
                    '<btn class="primary" icon="plus" :disabled="true" @click="action">Primary</btn> ' +
                    '<btn class="warning" icon="plus" :disabled="true" @click="action">Warning</btn> ' +
                    '<btn class="danger" icon="plus" :disabled="true" @click="action">Danger</btn> ' +
                    '<btn class="info" icon="plus" :disabled="true" @click="action">Info</btn>' +
                '</div>' +
                '<div style="margin-top: 20px;">' +
                    '<btn icon="plus" :disabled="true" @click="action" outline>Default</btn> ' +
                    '<btn class="primary" icon="plus" :disabled="true" @click="action" outline>Primary</btn> ' +
                    '<btn class="warning" icon="plus" :disabled="true" @click="action" outline>Warning</btn> ' +
                    '<btn class="danger" icon="plus" :disabled="true" @click="action" outline>Danger</btn> ' +
                    '<btn class="info" icon="plus" :disabled="true" @click="action" outline>Info</btn>' +
                '</div>' +
            '</div>',
        methods: { action: action('clicked') }
    }))
    .add('Loading', () => ({
        template:
            '<div>' +
                '<div>' +
                    '<btn :loading="true" @click="action">Default</btn> ' +
                    '<btn class="primary" :loading="true" @click="action">Primary</btn> ' +
                    '<btn class="warning" :loading="true" @click="action">Warning</btn> ' +
                    '<btn class="danger" :loading="true" @click="action">Danger</btn> ' +
                    '<btn class="info" :loading="true" @click="action">Info</btn>' +
                '</div>' +
                '<div style="margin-top: 20px;">' +
                    '<btn :loading="true" @click="action" outline>Default</btn> ' +
                    '<btn class="primary" :loading="true" @click="action" outline>Primary</btn> ' +
                    '<btn class="warning" :loading="true" @click="action" outline>Warning</btn> ' +
                    '<btn class="danger" :loading="true" @click="action" outline>Danger</btn> ' +
                    '<btn class="info" :loading="true" @click="action" outline>Info</btn>' +
                '</div>' +
            '</div>',
        methods: { action: action('clicked') }
    }))

storiesOf('Components|Buttons/Size', module)
    .add('Small', () => ({
        template:
            '<div>' +
            '<div>' +
            '<btn @click="action" small>Default</btn> ' +
            '<btn class="primary" @click="action" small>Primary</btn> ' +
            '<btn class="warning" @click="action" small>Warning</btn> ' +
            '<btn class="danger" @click="action" small>Danger</btn> ' +
            '<btn class="info" @click="action" small>Info</btn>' +
            '</div>' +
            '<div style="margin-top: 20px;">' +
            '<btn icon="plus" @click="action" outline small>Default</btn> ' +
            '<btn class="primary" icon="plus" @click="action" outline small>Primary</btn> ' +
            '<btn class="warning" icon="plus" @click="action" outline small>Warning</btn> ' +
            '<btn class="danger" icon="plus" @click="action" outline small>Danger</btn> ' +
            '<btn class="info" icon="plus" @click="action" outline small>Info</btn>' +
            '</div>' +
            '</div>',
        methods: { action: action('clicked') }
    }))
    .add('Default', () => ({
        template:
            '<div>' +
            '<div>' +
            '<btn @click="action">Default</btn> ' +
            '<btn class="primary" @click="action">Primary</btn> ' +
            '<btn class="warning" @click="action">Warning</btn> ' +
            '<btn class="danger" @click="action">Danger</btn> ' +
            '<btn class="info" @click="action">Info</btn>' +
            '</div>' +
            '<div style="margin-top: 20px;">' +
            '<btn icon="plus" @click="action" outline>Default</btn> ' +
            '<btn class="primary" icon="plus" @click="action" outline>Primary</btn> ' +
            '<btn class="warning" icon="plus" @click="action" outline>Warning</btn> ' +
            '<btn class="danger" icon="plus" @click="action" outline>Danger</btn> ' +
            '<btn class="info" icon="plus" @click="action" outline>Info</btn>' +
            '</div>' +
            '</div>',
        methods: { action: action('clicked') }
    }))
    .add('Large', () => ({
        template:
            '<div>' +
                '<div>' +
                    '<btn @click="action" large>Default</btn> ' +
                    '<btn class="primary" @click="action" large>Primary</btn> ' +
                    '<btn class="warning" @click="action" large>Warning</btn> ' +
                    '<btn class="danger" @click="action" large>Danger</btn> ' +
                    '<btn class="info" @click="action" large>Info</btn>' +
                '</div>' +
                '<div style="margin-top: 20px;">' +
                    '<btn icon="plus" @click="action" outline large>Default</btn> ' +
                    '<btn class="primary" icon="plus" @click="action" outline large>Primary</btn> ' +
                    '<btn class="warning" icon="plus" @click="action" outline large>Warning</btn> ' +
                    '<btn class="danger" icon="plus" @click="action" outline large>Danger</btn> ' +
                    '<btn class="info" icon="plus" @click="action" outline large>Info</btn>' +
                '</div>' +
            '</div>',
        methods: { action: action('clicked') }
    }))
