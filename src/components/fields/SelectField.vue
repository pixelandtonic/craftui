<template>
    <field :id="id + '-label'" :label="label" :instructions="instructions" :errors="errors">
        <select-input :fullwidth="fullwidth" :options="options" :value="value" @input="$emit('input', $event)"></select-input>
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
