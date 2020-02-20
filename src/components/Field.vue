<template>
    <div :id="'field-' + id" class="c-field">
        <label v-if="label" :for="id">{{label}}</label>

        <div v-if="instructions" class="instructions">
            <p>{{ instructions }}</p>
        </div>

        <slot></slot>

        <template v-if="errors" v-for="(error, key) in errors">
            <div class="invalid-feedback" :key="key">{{ error }}</div>
        </template>
    </div>
</template>

<script>
    export default {
        props: {
            errors: {
                type: Array | Boolean,
                default: null,
            },
            id: {
                type: String,
                default: function () {
                    return 'c-field-id-' + this._uid;
                },
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

<style lang="scss">
    .c-field {
        margin-bottom: 1rem;

        .instructions {
            @apply .mb-4;
            color: #8f98a3;
        }

        .invalid-feedback {
            @apply .text-red-500 .text-sm .mt-2 .mb-4;
        }

        &.mono input,
        &.mono textarea {
            @apply .font-mono;
        }
    }
</style>