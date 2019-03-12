<template>
    <c-field :id="id + '-label'" :label="label" :instructions="instructions" :errors="errors" class="c-select-field">
        <c-select-input :class="{'is-invalid': !!errors}" :fullwidth="fullwidth" :options="options" :value="value" @input="$emit('input', $event)"></c-select-input>
    </c-field>
</template>


<script>
    import Field from '../Field.vue';
    import SelectInput from '../inputs/SelectInput.vue';

    export default {
        props: {
            errors: {
                type: Array,
                default: null,
            },
            fullwidth: {
                type: Boolean,
                default: false,
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
            options: {
                type: Array,
                default: null,
            },
            value: {
                type: String,
                default: null,
            },
        },

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
