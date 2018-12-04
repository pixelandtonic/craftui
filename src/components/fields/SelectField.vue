<template>
    <div class="field">
        <label v-if="label" :id="id+'-label'" :for="id">{{ label }}</label>

        <div v-if="instructions" class="instructions">
            <p>{{ instructions }}</p>
        </div>

        <select-input :fullwidth="fullwidth" :options="options" :value="value" @input="$emit('input', $event.target.value)"></select-input>

        <div class="invalid-feedback" v-for="(error, key) in errors" :key="key">
            {{ error }}
        </div>
    </div>
</template>


<script>
    import SelectInput from '../inputs/SelectInput';

    export default {

        props: ['label', 'instructions', 'fullwidth', 'id', 'options', 'value', 'errors'],

        components: {
            SelectInput,
        },

    }
</script>
