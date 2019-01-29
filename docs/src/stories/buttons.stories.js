/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import {action} from '@storybook/addon-actions';

storiesOf('Buttons/Examples', module)
    .add('Default', () => ({
        template: '<btn @click="action">Default</btn>',
        methods: { action: action('clicked') }
    }))
    .add('Primary', () => ({
        template: '<btn type="primary" @click="action">Primary</btn>',
        methods: { action: action('clicked') }
    }))
    .add('Warning', () => ({
        template: '<btn type="warning" @click="action">Warning</btn>',
        methods: { action: action('clicked') }
    }))
    .add('Danger', () => ({
        template: '<btn type="danger" @click="action">Danger</btn>',
        methods: { action: action('clicked') }
    }))
    .add('Info', () => ({
        template: '<btn type="info" @click="action">Info</btn>',
        methods: { action: action('clicked') }
    }))

storiesOf('Buttons/Icon', module)
    .add('Regular', () => ({
        template: '<btn type="primary" @click="action" icon="check">Icon Button</btn>',
        methods: { action: action('clicked') }
    }))
    .add('Outline', () => ({
        template: '<btn type="primary" @click="action" icon="check" outline>Icon Button</btn>',
        methods: { action: action('clicked') }
    }))

storiesOf('Buttons/States', module)
    .add('Disabled', () => ({
        template: '<btn type="primary" @click="action" disabled>Disabled</btn>',
        methods: { action: action('clicked') }
    }))

storiesOf('Buttons/Size', module)
    .add('Block', () => ({
        template: '<btn type="primary" @click="action" block>Block</btn>',
        methods: { action: action('clicked') }
    }))
    .add('Large', () => ({
        template: '<btn type="primary" @click="action" large>Large</btn>',
        methods: { action: action('clicked') }
    }))

storiesOf('Buttons/Outline', module)
    .add('Default', () => ({
        template: '<btn type="default" @click="action" outline>Default</btn> ',
        methods: { action: action('clicked') }
    }))
    .add('Primary', () => ({
        template: '<btn type="primary" @click="action" outline>Primary</btn> ',
        methods: { action: action('clicked') }
    }))
    .add('Success', () => ({
        template: '<btn type="success" @click="action" outline>Success</btn> ',
        methods: { action: action('clicked') }
    }))
    .add('Warning', () => ({
        template: '<btn type="warning" @click="action" outline>Warning</btn> ',
        methods: { action: action('clicked') }
    }))
    .add('Danger', () => ({
        template: '<btn type="danger" @click="action" outline>Danger</btn> ',
        methods: { action: action('clicked') }
    }))
    .add('Info', () => ({
        template: '<btn type="info" @click="action" outline>Info</btn> ',
        methods: { action: action('clicked') }
    }))