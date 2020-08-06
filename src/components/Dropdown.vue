<template>
    <div class="c-dropdown" :class="{
        'is-invalid': invalid,
        'w-full': fullwidth,
        disabled,
    }">
            <select :disabled="disabled" :value="value" :class="{
                'form-select test sm:text-sm sm:leading-5 ps-3 pe-10': true,
                'w-full': fullwidth,
                'border-danger-separator': invalid,
                'border-field-separator': !invalid,
            }" @input="$emit('input', $event.target[$event.target.selectedIndex].value)">
                <option v-for="(option, key) in options" :value="option.value" :key="key">{{ option.label }}</option>
            </select>
    </div>
</template>

<script>
    export default {
        props: {
            disabled: {
                type: Boolean,
                default: false,
            },
            invalid: {
                type: Boolean,
                default: false,
            },
            fullwidth: {
                type: Boolean,
                default: false,
            },
            id: {
                type: String,
                default: function () {
                    return 'c-dropdown-id-' + this._uid;
                },
            },
            options: {
                type: Array,
                default: null,
            },
            value: {
                type: String | Number,
                default: null,
            },
        },
    }
</script>

<style lang="scss">
    @import "../sass/mixins";

    .c-dropdown {
        display: inline-block;
        position: relative;

        &.disabled {
            @apply opacity-50;
        }

        select {
            @apply .border-cool-gray-200;

            @include ltr() {
                background-position: right 0.5rem center;
            }

            @include rtl() {
                background-position: left 0.5rem center;
            }
        }
    }

</style>