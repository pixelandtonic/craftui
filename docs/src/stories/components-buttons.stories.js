/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import {action} from '@storybook/addon-actions'
import { withViewport } from '@storybook/addon-viewport'

storiesOf('Components|Buttons/Examples', module)
    .add('Default', () => ({
        template: '<btn @click="action">Default</btn>',
        methods: { action: action('clicked') }
    }))
    .add('Primary', () => ({
        template: '<btn class="primary" @click="action">Primary</btn>',
        methods: { action: action('clicked') }
    }))
    .add('Warning', () => ({
        template: '<btn class="warning" @click="action">Warning</btn>',
        methods: { action: action('clicked') }
    }))
    .add('Danger', () => ({
        template: '<btn class="danger" @click="action">Danger</btn>',
        methods: { action: action('clicked') }
    }))
    .add('Info', () => ({
        template: '<btn class="info" @click="action">Info</btn>',
        methods: { action: action('clicked') }
    }))

storiesOf('Components|Buttons/Icon', module)
    .add('Regular', () =>
        ({
            template:
                '<div>' +
                '<btn @click="action" icon="plus">Default</btn> ' +
                '<btn class="primary" @click="action" icon="plus">Primary</btn> ' +
                '<btn class="warning" @click="action" icon="plus">Warning</btn> ' +
                '<btn class="danger" @click="action" icon="plus">Danger</btn> ' +
                '<btn class="info" @click="action" icon="plus">Info</btn>' +
                '</div>',
            methods: { action: action('clicked') }
        })
    )
    .add('Outline', () => ({
        template:
            '<div>' +
            '<btn @click="action" icon="plus" outline>Default</btn> ' +
            '<btn class="primary" @click="action" icon="plus" outline>Primary</btn> ' +
            '<btn class="warning" @click="action" icon="plus" outline>Warning</btn> ' +
            '<btn class="danger" @click="action" icon="plus" outline>Danger</btn> ' +
            '<btn class="info" @click="action" icon="plus" outline>Info</btn>' +
            '</div>',
        methods: { action: action('clicked') }
    }))

storiesOf('Components|Buttons/States', module)
    .add('Disabled', () => ({
        template: '<btn class="primary" @click="action" disabled>Disabled</btn>',
        methods: { action: action('clicked') }
    }))
    .add('Loading', () => ({
        template: '<btn class="primary" @click="action" loading>Button</btn>',
        methods: { action: action('clicked') }
    }))

storiesOf('Components|Buttons/Size', module)
    .add('Large', () => ({
        template: '<btn class="primary" @click="action" large>Large</btn>',
        methods: { action: action('clicked') }
    }))
    .addDecorator(withViewport('iphonex'))
    .add('Block', () => ({
        template: '<btn class="primary" @click="action" block>Block</btn>',
        methods: { action: action('clicked') }
    }))

storiesOf('Components|Buttons/Outline', module)
    .add('Default', () => ({
        template: '<btn class="default" @click="action" outline>Default</btn> ',
        methods: { action: action('clicked') }
    }))
    .add('Primary', () => ({
        template: '<btn class="primary" @click="action" outline>Primary</btn> ',
        methods: { action: action('clicked') }
    }))
    .add('Success', () => ({
        template: '<btn class="success" @click="action" outline>Success</btn> ',
        methods: { action: action('clicked') }
    }))
    .add('Warning', () => ({
        template: '<btn class="warning" @click="action" outline>Warning</btn> ',
        methods: { action: action('clicked') }
    }))
    .add('Danger', () => ({
        template: '<btn class="danger" @click="action" outline>Danger</btn> ',
        methods: { action: action('clicked') }
    }))
    .add('Info', () => ({
        template: '<btn class="info" @click="action" outline>Info</btn> ',
        methods: { action: action('clicked') }
    }))