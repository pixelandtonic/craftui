<template>
    <input
            class="c-password-input"
            :autofocus="autofocus"
            :id="id"
            :name="name"
            :placeholder="placeholder"
            :value="value"
            @input="$emit('input', $event.target.value)"
            autocomplete="off"
            :class="{'w-full': !size }"
            ref="input"
            type="password"/>
</template>

<script>
    export default {

        props: ['id', 'name', 'placeholder', 'value', 'autofocus', 'size'],

        created() {
            this.$on('focus', function() {
                this.$refs.input.focus()
            })
        }

    }
</script>

<style lang="scss">
    input.c-password-input {
        &.w-full {
            @apply .w-full;
        }
    }
</style>
