<template>
    <div class="c-radio" :class="{
        [`${PREFIX}flex ${PREFIX}items-center ${PREFIX}my-2`]: true,
        disabled,
    }">
        <input type="radio"
               :class="`${PREFIX}form-radio ${PREFIX}h-4 ${PREFIX}w-4`"
               :id="id"
               :value="value"
               :checked="checked"
               :disabled="disabled"
               @input="onInput"
        />

        <label :for="id" :class="`${PREFIX}mb-0 ${PREFIX}ps-2 ${PREFIX}ml-0`">
            <span :class="`${PREFIX}block ${PREFIX}text-sm ${PREFIX}leading-5 ${PREFIX}text-text`">{{ label }}</span>
        </label>
    </div>
</template>

<script>
    export default {
        model: {
            prop: 'modelValue',
            event: 'input'
        },

        props: {
            disabled: Boolean,
            id: {
                type: String,
                default: function() {
                    return 'radio-' + this._uid
                }
            },
            label: String,
            modelValue: String,
            value: String,
        },

        computed: {
            checked() {
                return this.modelValue === this.value
            }
        },

        methods: {
            onInput($event) {
                this.$emit('input', $event.target.value)
            }
        },
    }
</script>

<style lang="scss">
    .c-radio {
        &.disabled {
            @apply opacity-50;
        }
    }
</style>