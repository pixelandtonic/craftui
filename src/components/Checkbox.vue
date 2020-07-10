<template>
    <div class="c-checkbox tw-relative tw-flex tw-items-start tw-my-2" :class="{
        disabled,
    }">
        <div class="tw-flex tw-items-center tw-h-5">
            <input type="checkbox"
                   class="tw-form-checkbox tw-h-4 tw-w-4"
                   :id="id"
                   :value="value"
                   :checked="checked"
                   :disabled="disabled"
                   @input="onInput"
            />
        </div>

        <div class="tw-ms-2 tw-text-sm tw-leading-5" :class="{'tw-text-danger': invalid}">
            <label class="tw-mb-0" :for="id">
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