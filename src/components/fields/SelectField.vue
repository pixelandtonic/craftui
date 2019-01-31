<template>
    <field :id="id + '-label'" :label="label">
        <div v-if="instructions" class="instructions">
            <p>{{ instructions }}</p>
        </div>

        <select-input :fullwidth="fullwidth" :options="options" :value="value" @input="$emit('input', $event)"></select-input>

        <div class="invalid-feedback" v-for="(error, key) in errors" :key="key">
            {{ error }}
        </div>
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
