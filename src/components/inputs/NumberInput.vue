<template>
    <input
            :autofocus="autofocus"
            :disabled="disabled"
            :id="id"
            :name="name"
            :placeholder="placeholder"
            :value="value"
            @input="$emit('input', $event.target.value)"
            @change="$emit('change', $event)"
            @keypress="$emit('keypress', $event)"
            @keydown="$emit('keydown', $event)"
            @keyup="$emit('keyup', $event)"
            autocomplete="off"
            ref="input"
            :readonly="readonly"
            :min="min"
            :max="max"
            :step="step"
            :pattern="pattern"
            type="number"/>
</template>

<script>

    export default {

        props: ['id', 'name', 'placeholder', 'value', 'autofocus', 'disabled', 'readonly', 'min', 'max', 'step', 'pattern'],

        created() {
            this.$on('focus', function () {
                this.$refs.input.focus()
            })
        },

    }

</script>
