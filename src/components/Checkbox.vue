<template>
    <div class="c-checkbox" :class="{
        'relative flex items-start my-2': true,
        disabled,
    }">
        <div class="flex items-center h-5">
            <input type="checkbox"
                   class="form-checkbox h-4 w-4"
                   :id="id"
                   :value="value"
                   :checked="checked"
                   :disabled="disabled"
                   @input="onInput"
            />
        </div>

        <div :class="{
            'ms-2 text-sm leading-5': true,
            'text-danger': invalid
        }">
            <label class="mb-0" :for="id">
                {{ label }}
            </label>
        </div>
    </div>
</template>

<script>
    export default {
        model: {
            prop: 'checked',
            event: 'input'
        },

        props: {
            checked: Boolean,
            disabled: Boolean,
            id: {
                type: String,
                default: function() {
                    return 'checkbox-' + this._uid
                }
            },
            invalid: Boolean,
            label: String,
            value: String,
        },

        methods: {
            onInput($event) {
                this.$emit('input', $event.target.checked)
            }
        },
    }
</script>

<style lang="scss">
    .c-checkbox {
        &.disabled {
            @apply opacity-50;
        }
    }
</style>