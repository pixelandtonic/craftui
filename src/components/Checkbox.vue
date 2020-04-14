<template>
    <div class="c-checkbox relative flex items-start my-2">
        <div class="absolute flex items-center h-5">
            <input type="checkbox"
                   class="form-checkbox h-4 w-4"
                   :id="id"
                   :value="value"
                   :checked="checked"
                   :disabled="disabled"
                   @input="onInput"
            />
        </div>

        <div class="pl-7 text-sm leading-5" :class="{'text-danger': invalid}">
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
            id: String,
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
