<template>
    <div :id="'field-' + id" class="c-field">
        <label v-if="label" :for="id">{{label}}</label>

        <div v-if="instructions" class="instructions">
            <p>{{ instructions }}</p>
        </div>

        <slot></slot>

        <div class="invalid-feedback" v-for="(error, key) in errors" :key="key">
            {{ error }}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
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
    }
</script>
