<template>
    <div class="c-radio" :class="{
        'flex items-center my-2': true,
        disabled,
    }">
        <input type="radio"
               class="form-radio h-4 w-4"
               :id="id"
               :value="value"
               :checked="checked"
               :disabled="disabled"
               @input="onInput"
        />

        <label :for="id" class="mb-0 ps-2 ml-0">
            <span class="block text-sm leading-5 text-text">{{ label }}</span>
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