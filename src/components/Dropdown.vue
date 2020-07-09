<template>
    <div class="c-dropdown" :class="{
        'is-invalid': invalid,
        'tw-w-full': fullwidth,
        disabled,
    }">
            <select class="tw-form-select test sm:tw-text-sm sm:tw-leading-5" :disabled="disabled" :value="value" :class="{
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
    .c-dropdown {
        display: inline-block;
        position: relative;

        .tw-border-field-separator {
            @apply .border-cool-gray-200;
        }

        &.disabled {
            @apply opacity-50;
        }

        &:after {
            z-index: 10000;
            content: ' ';
            position: absolute;
            top: calc(50% - 4px);
            right: 0.75rem;
            width: 8px;
            height: 8px;
            background-position: center center;
            background-repeat: no-repeat;
            background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath fill='currentColor' d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z'%3E%3C/path%3E%3C/svg%3E");
            user-select: none;
            pointer-events: none;
        }
    }

</style>