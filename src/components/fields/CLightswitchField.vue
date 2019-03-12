<template>
    <field :id="id" :label="label" :instructions="instructions" :errors="errors" class="c-lightswitch-field">
        <lightswitch-input :id="id" :checked="checked" :disabled="disabled" @change="$emit('change', $event)" @update:checked="$emit('update:checked', $event)" />
    </field>
</template>

<script>
    import CField from '../CField.vue';
    import CLightswitchInput from '../inputs/CLightswitchInput.vue';

    export default {
        props: ['label', 'id', 'checked', 'instructions', 'disabled', 'errors'],

        components: {
            CField,
            CLightswitchInput,
        },
    }
</script>
