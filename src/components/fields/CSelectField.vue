<template>
    <field :id="id + '-label'" :label="label" :instructions="instructions" :errors="errors" class="c-select-field">
        <select-input :class="{'is-invalid': !!errors}" :fullwidth="fullwidth" :options="options" :value="value" @input="$emit('input', $event)"></select-input>
    </field>
</template>


<script>
    import CField from '../CField.vue';
    import CSelectInput from '../inputs/CSelectInput.vue';

    export default {
        props: ['label', 'instructions', 'fullwidth', 'id', 'options', 'value', 'errors'],

        components: {
            CField,
            CSelectInput,
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
