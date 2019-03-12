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
            autocapitalize: {
                type: Boolean,
                default: false
            },
            autofocus: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            id: {
                type: String,
                default: null
            },
            mask: {
                type: String |
                    Array, default: null
            },
            max: {
                type: String,
                default: null
            },
            min: {
                type: String,
                default: null
            },
            name: {
                type: String,
                default: null
            },
            pattern: {
                type: String,
                default: null
            },
            placeholder: {
                type: String,
                default: null
            },
            readonly: {
                type: Boolean,
                default: false
            },
            size: {
                type: String,
                default: null
            },
            spellcheck: {
                type: Boolean,
                default: false
            },
            step: {
                type: String,
                default: null
            },
            type: {
                type: String,
                default: 'text'
            },
            value: {
                type: String,
                default: null
            },
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
