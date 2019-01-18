<template>
    <field :id="id" :label="label">
        <div v-if="instructions" class="instructions">
            <p>{{ instructions }}</p>
        </div>
        <lightswitch-input :id="id" :checked="checked" :disabled="disabled" @change="$emit('change', $event)" @update:checked="$emit('update:checked', $event)" />
    </field>
</template>

<script>
    import Field from '../Field.vue';
    import LightswitchInput from '../inputs/LightswitchInput.vue';

    export default {

        props: ['label', 'id', 'checked', 'instructions', 'disabled'],

        components: {
            Field,
            LightswitchInput,
        },

    }
</script>
