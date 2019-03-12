<template>
    <field :id="id" :label="label" :instructions="instructions" :errors="errors" class="c-lightswitch-field">
        <lightswitch-input :id="id" :checked="checked" :disabled="disabled" @change="$emit('change', $event)" @update:checked="$emit('update:checked', $event)" />
    </field>
</template>

<script>
    import CField from '../CField.vue';
    import CLightswitchInput from '../inputs/CLightswitchInput.vue';

    export default {
        props: {
            checked: {
                type: Boolean,
                default: null,
            },
            disabled: {
                type: Boolean,
                default: null,
            },
            errors: {
                type: Array,
                default: null,
            },
            id: {
                type: String,
                default: null,
            },
            instructions: {
                type: String,
                default: null,
            },
            label: {
                type: String,
                default: null,
            },
        },
        components: {
            CField,
            CLightswitchInput,
        },
    }
</script>
