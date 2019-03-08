<template>
    <input
        :autofocus="autofocus"
        :disabled="disabled"
        :id="id"
        :name="name"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', $event.target.value)"
        autocomplete="off"
        :class="{'w-full': !size }"
        ref="input"
        v-mask="mask"
        :autocapitalize="autocapitalize"
        :spellcheck="spellcheck"
        :readonly="readonly"
        :size="size"
        type="text"/>
</template>

<script>
    import mask from 'vue-the-mask/src/directive'

    export default {
        directives: {mask},

        props: {
            id: {type: String, default: null},
            name: {type: String, default: null},
            placeholder: {type: String, default: null},
            value: {type: String, default: null},
            autofocus: {type: Boolean, default: false},
            disabled: {type: Boolean, default: false},
            mask: {type: String | Object, default: ''},
            autocapitalize: {type: Boolean, default: false},
            spellcheck: {type: Boolean, default: false},
            readonly: {type: Boolean, default: false},
            size: {type: String, default: null},
        },

        created() {
            this.$on('focus', function () {
                this.$refs.input.focus()
            })
        },
    }
</script>

<style lang="scss" scoped>
    input {
        &.w-full {
            @apply .w-full;
        }
    }
</style>
