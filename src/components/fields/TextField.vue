<template>
    <c-field :id="id" :label="label" :instructions="instructions" :errors="errors" class="c-text-field">
        <div class="wrapper">
            <c-text-input
                    :autofocus="autofocus"
                    :class="{
                        'is-invalid': errors,
                        'text-red-dark': max && max < this.value.length
                    }"
                    :disabled="disabled"
                    :id="id"
                    :name="name"
                    :placeholder="placeholder"
                    :value="value"
                    :mask="mask"
                    @input="$emit('input', $event)"
                    :autocapitalize="autocapitalize"
                    :spellcheck="spellcheck"
                    :readonly="readonly"
                    :type="type"
                    ref="input"/>

            <p v-if="max"
               class="max"
               :class="{
                    'text-grey': remainingChars >= 20,
                    'text-orange': remainingChars < 20 && remainingChars >= 0,
                    'text-red': remainingChars < 0
                }"><small>{{ (max - remainingChars) }}/{{max}}</small></p>
        </div>
    </c-field>
</template>

<script>
    import Field from '../Field.vue';
    import TextInput from '../inputs/TextInput.vue';

    export default {
        props: {
            type: {
                type: String,
                default: 'text'
            },
            label: {
                type: String,
                default: null
            },
            errors: {
                type: Array,
                default: null
            },
            instructions: {
                type: String,
                default: null
            },
            max: {
                type: Number,
                default: null
            },
            id: {
                type: String,
                default: null
            },
            name: {
                type: String,
                default: null
            },
            placeholder: {
                type: String,
                default: null
            },
            value: {
                type: String,
                default: null
            },
            autofocus: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            mask: {
                type: String |
                    Object, default: ''
            },
            autocapitalize: {
                type: Boolean,
                default: false
            },
            spellcheck: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            size: {
                type: String,
                default: null
            },
        },

        components: {
            Field,
            TextInput,
        },

        computed: {
            remainingChars() {
                if (this.max) {
                    return this.max - this.value.length
                }
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
    @import "../../sass/mixins";

    .c-text-field {
        .wrapper {
            @apply .relative;

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
