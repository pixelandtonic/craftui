<template>
    <field :id="id" :label="label" :instructions="instructions" :errors="errors" class="c-text-field">
        <div class="wrapper">
            <component
                    :is="computedComponent"

                    :autocapitalize="autocapitalize"
                    :autofocus="autofocus"
                    :class="{
                        'w-full': !size,
                        'is-invalid': errors,
                        'text-red-dark': max && max < this.value.length
                    }"
                    :cols="computedCols"
                    :disabled="disabled"
                    :id="id"
                    :mask="mask"
                    :max="max"
                    :min="min"
                    :name="name"
                    :pattern="pattern"
                    :placeholder="placeholder"
                    :readonly="readonly"
                    :rows="computedRows"
                    :size="size"
                    :spellcheck="spellcheck"
                    :step="step"
                    :type="computedType"
                    :value="value"
                    @change="$emit('change', $event)"
                    @input="$emit('input', $event.target.value)"
                    @keydown="$emit('keydown', $event)"
                    @keypress="$emit('keypress', $event)"
                    @keyup="$emit('keyup', $event)"
                    autocomplete="off"
                    class="c-text-input"
                    ref="input"
                    v-mask="mask"
            />

            <p v-if="max"
               class="max"
               :class="{
                    'text-grey': remainingChars >= 20,
                    'text-orange': remainingChars < 20 && remainingChars >= 0,
                    'text-red': remainingChars < 0
                }"><small>{{ (max - remainingChars) }}/{{max}}</small></p>
        </div>
    </field>
</template>

<script>
    import Field from './Field.vue';
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
            cols: {
                type: Number,
                default: null,
            },
            disabled: {
                type: Boolean,
                default: false
            },
            errors: {
                type: Array,
                default: null
            },
            id: {
                type: String,
                default: null
            },
            instructions: {
                type: String,
                default: null
            },
            label: {
                type: String,
                default: null
            },
            mask: {
                type: String | Object,
                default: ''
            },
            max: {
                type: Number,
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
            rows: {
                type: Number,
                default: null,
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

        components: {
            Field,
        },

        computed: {
            remainingChars() {
                if (this.max) {
                    return this.max - this.value.length
                }
            },

            computedComponent() {
                if (this.type === 'textarea') {
                    return 'textarea'
                }

                return 'input'
            },

            computedType() {
                if (this.type === 'textarea') {
                    return null
                }

                return this.type
            },

            computedCols() {
                if (this.type !== 'textarea') {
                    return null
                }

                return this.cols
            },

            computedRows() {
                if (this.type !== 'textarea') {
                    return null
                }

                return this.rows ? this.rows : 4
            }
        },

        created() {
            this.$on('focus', function() {
                this.$refs.input.$emit('focus');
            })
        }
    }
</script>

<style lang="scss">
    @import "../sass/mixins";

    .c-text-field {
        .wrapper {
            @apply .relative;

            input.c-text-input {
                &.w-full {
                    @apply .w-full;
                }
            }

            .text-red-dark {
                @apply .text-red-dark;
            }

            .max {
                @apply .mt-2;
                @include pr(1);

                &.floating {
                    @apply .absolute .text-xs .text-right;
                }

                &.text-grey {
                    @apply .text-grey;
                }

                &.text-orange {
                    @apply .text-orange;
                }

                &.text-red {
                    @apply .text-red;
                }
            }
        }
    }
</style>
