<template>
    <input
        :autofocus="autofocus"
        :disabled="disabled"
        :id="id"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', $event.target.value)"
        autocomplete="off"
        :class="{'w-full': !size }"
        ref="input"
        type="url"/>
</template>

<script>
    export default {

        props: ['id', 'placeholder', 'value', 'autofocus', 'disabled', 'size'],

        created() {
            this.$on('focus', function() {
                this.$refs.input.focus()
            })
        }

    }
</script>

