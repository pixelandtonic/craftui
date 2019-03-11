<template>
    <field :id="id + '-label'" :label="label" :instructions="instructions" :errors="errors" class="c-select-field">
        <select-input :class="{'is-invalid': !!errors}" :fullwidth="fullwidth" :options="options" :value="value" @input="$emit('input', $event)"></select-input>
    </field>
</template>


<script>
    import Field from '../Field.vue';
    import SelectInput from '../inputs/SelectInput.vue';

    export default {

        props: ['label', 'instructions', 'fullwidth', 'id', 'options', 'value', 'errors'],

        components: {
            Field,
            SelectInput,
        },

    }
</script>

<style lang="scss">
    .c-select-field {
        .is-invalid {
            select {
                @apply .border-red;
            }
        }
    }
</style>
