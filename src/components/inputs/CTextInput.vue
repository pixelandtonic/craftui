<template>
    <input
            autocomplete="off"
            class="c-text-input"
            ref="input"
            v-mask="mask"
            :autocapitalize="autocapitalize"
            :autofocus="autofocus"
            :class="{'w-full': !size }"
            :disabled="disabled"
            :id="id"
            :max="max"
            :min="min"
            :name="name"
            :pattern="pattern"
            :placeholder="placeholder"
            :readonly="readonly"
            :size="size"
            :spellcheck="spellcheck"
            :step="step"
            :type="type"
            :value="value"
            @change="$emit('change', $event)"
            @input="$emit('input', $event.target.value)"
            @keydown="$emit('keydown', $event)"
            @keypress="$emit('keypress', $event)"
            @keyup="$emit('keyup', $event)"
    />
</template>

<script>
    import mask from 'vue-the-mask/src/directive'

    export default {
        directives: {
            mask: {
                bind(el, binding, vnode) {
                    if (vnode.context.mask) {
                        return mask(el, binding)
                    }
                }
            }
        },

        props: {
            type: {type: String, default: 'text'},
            id: {type: String, default: null},
            name: {type: String, default: null},
            placeholder: {type: String, default: null},
            value: {type: String, default: null},
            autofocus: {type: Boolean, default: false},
            disabled: {type: Boolean, default: false},
            mask: {type: String | Array, default: null},
            autocapitalize: {type: Boolean, default: false},
            spellcheck: {type: Boolean, default: false},
            readonly: {type: Boolean, default: false},
            size: {type: String, default: null},
            max: {type: String, default: null},
            min: {type: String, default: null},
            pattern: {type: String, default: null},
            step: {type: String, default: null},
        },

        created() {
            this.$on('focus', function() {
                this.$refs.input.focus()
            })
        },
    }
</script>

<style lang="scss">
    input {
        &.w-full {
            @apply .w-full;
        }
    }
</style>
