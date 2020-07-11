<template>
    <div class="c-checkbox" :class="{
        [`${PREFIX}relative ${PREFIX}flex ${PREFIX}items-start ${PREFIX}my-2`]: true,
        disabled,
    }">
        <div :class="`${PREFIX}flex ${PREFIX}items-center ${PREFIX}h-5`">
            <input type="checkbox"
                   :class="`${PREFIX}form-checkbox ${PREFIX}h-4 ${PREFIX}w-4`"
                   :id="id"
                   :value="value"
                   :checked="checked"
                   :disabled="disabled"
                   @input="onInput"
            />
        </div>

        <div :class="{
            [`${PREFIX}ms-2 ${PREFIX}text-sm ${PREFIX}leading-5`]: true,
            [`${PREFIX}text-danger`]: invalid
        }">
            <label :class="`${PREFIX}mb-0`" :for="id">
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