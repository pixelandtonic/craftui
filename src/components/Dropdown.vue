<template>
    <div class="c-dropdown" :class="{
        'is-invalid': invalid,
        'tw-w-full': fullwidth,
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

