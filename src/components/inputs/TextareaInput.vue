<template>
    <textarea
            class="c-textarea-input"
            :cols="cols"
            :disabled="disabled"
            :id="id"
            :placeholder="placeholder"
            :value="value"
            @input="$emit('input', $event.target.value)"
            :autocapitalize="autocapitalize"
            :spellcheck="spellcheck"
            autocomplete="off"
            :class="{'w-full': !size }"
            type="text">
    </textarea>
</template>

<script>
    export default {
        props: {
            autocapitalize: {
                type: Boolean,
                default: false,
            },
            cols: {
                type: Number,
                default: null,
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            id: {
                type: String,
                default: null,
            },
            placeholder: {
                type: String,
                default: null,
            },
            size: {
                size: Number,
                default: null,
            },
            spellcheck: {
                type: Boolean,
                default: false,
            },
            value: {
                type: String,
                default: null,
            },
        },
    }
</script>

<style lang="scss">
    textarea.c-textarea-input {
        &.w-full {
            @apply .w-full;
        }
    }
</style>
