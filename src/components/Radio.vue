<template>
    <div class="c-radio flex items-center my-2">
        <input type="radio"
               class="form-radio h-4 w-4"
               :id="id"
               :value="value"
               :checked="checked"
               :disabled="disabled"
               @input="onInput"
        />

        <label :for="id" class="mb-0 pl-3 ml-0">
            <span class="block text-sm leading-5 font-medium text-text">{{ label }}</span>
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
