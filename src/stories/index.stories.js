/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import '../sass/storybook.scss';

import Btn from '../components/Btn.vue'
import LightswitchField from '../components/fields/LightswitchField.vue'
import CheckboxField from '../components/fields/CheckboxField.vue'
import PasswordField from '../components/fields/PasswordField.vue'
import SelectField from '../components/fields/SelectField.vue'
import TextareaField from '../components/fields/TextareaField.vue'
import TextField from '../components/fields/TextField.vue'
import UrlField from '../components/fields/UrlField.vue'

storiesOf('Button', module)
  .add('Default', () => ({
    components: { Btn },
    template: '<btn @click="action">Hello Button</btn>',
    methods: { action: action('clicked') }
  }))
  .add('Primary', () => ({
    components: { Btn },
    template: '<btn type="primary" @click="action">Primary Button</btn>',
    methods: { action: action('clicked') }
  }))
  .add('Warning', () => ({
    components: { Btn },
    template: '<btn type="warning" @click="action">Warning Button</btn>',
    methods: { action: action('clicked') }
  }))
  .add('Danger', () => ({
    components: { Btn },
    template: '<btn type="danger" @click="action">Danger Button</btn>',
    methods: { action: action('clicked') }
  }))

storiesOf('Checkbox Field', module)
    .add('Checked', () => ({
        components: { CheckboxField },
        template: '<checkbox-field :value="true"></checkbox-field>',
    }))
    .add('Unchecked', () => ({
        components: { CheckboxField },
        template: '<checkbox-field :value="false"></checkbox-field>',
    }));

storiesOf('Lightswitch Field', module)
    .add('Checked', () => ({
        components: { LightswitchField },
        template: '<lightswitch-field :checked="true"></lightswitch-field>',
    }))
    .add('Unchecked', () => ({
        components: { LightswitchField },
        template: '<lightswitch-field :checked="false"></lightswitch-field>',
    }));

storiesOf('Password Field', module)
    .add('Default', () => ({
        components: { PasswordField },
        template: '<password-field></password-field>',
    }));

storiesOf('Select Field', module)
    .add('Default', () => ({
        components: { SelectField },
        template: '<select-field :options="[{label:\'One\', value:1}, {label:\'Two\', value:2}, {label:\'Three\', value:3}]"></select-field>',
    }));


storiesOf('Textarea Field', module)
    .add('Default', () => ({
        components: { TextareaField },
        template: '<textarea-field id="textarea-default" label="Textarea"></textarea-field>',
    }))
    .add('with Max', () => ({
        components: { TextareaField },
        template: '<textarea-field id="max" label="Textarea" placeholder="Max 130 characters." v-model="value" :max="130"></textarea-field>',
        data() {
            return {
                value: ''
            }
        }
    }));

storiesOf('Text Field', module)
    .add('Default', () => ({
        components: { TextField },
        template: '<text-field></text-field>',
    }));

storiesOf('URL Field', module)
    .add('Default', () => ({
        components: { UrlField },
        template: '<url-field></url-field>',
    }));
