<template>
    <div class="c-dropdown">
        <div class="c-dropdown-input" :class="{'is-invalid': invalid}">
            <div class="select">
                <select class="form-select sm:text-sm sm:leading-5" :disabled="disabled" :value="value" :class="{ 'w-full': fullwidth }" @input="$emit('input', $event.target[$event.target.selectedIndex].value)">
                    <option v-for="(option, key) in options" :value="option.value" :key="key">{{ option.label }}</option>
                </select>
            </div>
        </div>
    </div>
</template>


<script>
    import Field from './Field.vue';

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
                type: String | Number,
                default: null,
            },
        },

        components: {
            Field,
        },
    }
</script>

<style lang="scss">
    .c-dropdown {
        .c-dropdown-input {
            select {
                @apply .border .border-field-separator .bg-field-background;
                height: calc(2.25rem + 2px);

                &.w-full {
                    @apply .w-full;
                }
            }

            &.is-invalid {
                select {
                    @apply .border-red-500;
                }
            }
        }
    }
</style>
