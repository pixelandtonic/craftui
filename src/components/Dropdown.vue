<template>
    <div class="c-dropdown" :class="{
        'is-invalid': invalid,
        'tw-w-full': fullwidth,
        disabled,
    }">
            <select class="tw-form-select test sm:tw-text-sm sm:tw-leading-5 tw-ps-3 tw-pe-10" :disabled="disabled" :value="value" :class="{
                'tw-w-full': fullwidth,
                'tw-border-danger-separator': invalid,
                'tw-border-field-separator': !invalid,
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

        .tw-border-field-separator {
            @apply .border-cool-gray-200;
        }

        &.disabled {
            @apply opacity-50;
        }

        select {
            @include ltr() {
                background-position: right 0.5rem center;
            }

            @include rtl() {
                background-position: left 0.5rem center;
            }
        }
    }

</style>