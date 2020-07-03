<template>
    <div class="c-radio tw-flex tw-items-center tw-my-2">
        <input type="radio"
               class="tw-form-radio tw-h-4 tw-w-4"
               :id="id"
               :value="value"
               :checked="checked"
               :disabled="disabled"
               @input="onInput"
        />

        <label :for="id" class="tw-mb-0 tw-pl-3 tw-ml-0">
            <span class="tw-block tw-text-sm tw-leading-5 tw-text-text">{{ label }}</span>
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
            id: String,
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
