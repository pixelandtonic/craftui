<template>
    <field :id="id" :label="label" :instructions="instructions" :errors="errors" class="c-lightswitch-field">
        <lightswitch-input :id="id" :checked="checked" :disabled="disabled" @change="$emit('change', $event)" @update:checked="$emit('update:checked', $event)" />
    </field>
</template>

<script>
    import Field from '../Field.vue';
    import LightswitchInput from '../inputs/LightswitchInput.vue';

    export default {

        props: ['label', 'id', 'checked', 'instructions', 'disabled', 'errors'],

        components: {
            Field,
            LightswitchInput,
        },

    }
</script>
